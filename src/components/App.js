import React, { Component } from 'react';
import FeaturedMix from './FeaturedMix';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          { /*  FeaturedMix*/ }
          <FeaturedMix />
          <div>
            {/* Header */}
            <Header />
            {/* Routed Page */}
          </div>
        </div>
        {/* Audio Player */}
        <iframe 
          width="100%" 
          height="60" 
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FPharcydeTV%2Fsplendidradio-w-octavio-camacho-and-mixmaster-wolf%2F" 
          frameBorder="0" >
        </iframe>
      </div>
    );
  }
}

export default App;
