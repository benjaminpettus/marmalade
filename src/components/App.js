import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FeaturedMix from './FeaturedMix';
import Header from './Header';

const Home = () => <h1>Home</h1>
const Archive = () => <h1>Archive</h1>
const About = () => <h1>About</h1>


class App extends Component {
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
          />
        </div>

      </Router>
      
    )
  }
}

export default App;
