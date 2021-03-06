/*global Mixcloud*/
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FeaturedMix from './FeaturedMix';
import Header from './Header';

const Home = () => <h1>Home</h1>
const Archive = () => <h1>Archive</h1>
const About = () => <h1>About</h1>


class App extends Component {

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player)
    // waiting for our widget to be ready to load
    await this.widget.ready
    await this.widget.play();

    console.log(this.widget);
  }

  componentDidMount(){
   // when our app component loads
   //componentDidMount gets called and we can be sure
   // everything is ready and can run mountAudio()
    this.mountAudio()
  }

  togglePlay = () => {
    console.log('togglePlay')
    this.widget.togglePlay()
  }

  playMix = mixName => {
    //load a new mix by its name and start playing it immediately
    this.widget.load(mixName, true)
  }

  render() {
    return (
      <Router>

        <div>
          {/* this div contians our page (excluding audio player) */}
          <div className="flex-l justify-end">
            {/* FeaturedMix (needs styling and updating) */}
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              {/* Header (needs styling and updating)  */}
              <Header />
              {/* Routed page */}
              <div>
                <button onClick={this.togglePlay}>Play/Pause</button>
              </div>

              <div>
                <button onClick={() => this.playMix('/NTSRadio/bonobo-24th-june-2015/')}>Play Mix</button>
              </div>

              <Route exact path="/" component={Home}/>
              <Route exact path="/archive" component={Archive}/>
              <Route exact path="/about" component={About}/>
            </div>
          </div>
          {/* AudioPlayer */}
          <iframe
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
            frameBorder="0"
            className="db fixed bottom-0 z-5" 
            ref={player => (this.player = player)}
          />
        </div>

      </Router>
      
    )
  }
}

export default App;
