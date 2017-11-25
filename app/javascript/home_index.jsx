import React from 'react'
import ReactDOM from 'react-dom'
import WriteUsModalProcessor from './write_us_modal_processor'

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ''
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<WriteUsModalProcessor buttonClass="order-visualization-top-button" />,
    document.getElementById('write-us-top'));
  ReactDOM.render(<WriteUsModalProcessor buttonClass="order-visualization-bottom-button" />,
    document.getElementById('write-us-bottom'));
});

