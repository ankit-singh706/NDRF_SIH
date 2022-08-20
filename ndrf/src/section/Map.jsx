import React, { Component } from "react";
import __html from '../components/StaticHTML';
var template = { __html: __html };

class Map extends Component {
  render() {
    return (
      <div className="screen-share">
        <span dangerouslySetInnerHTML={template} />
      </div>
    );
  }
}
export default Map;