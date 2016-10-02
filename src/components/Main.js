require('normalize.css/normalize.css');
require('styles/App.css');
import Search from './application/homepage/SearchComponent';
import SimpleMap from './application/homepage/SimpleMapComponent';

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Search/>
        <SimpleMap className="search-map"/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;