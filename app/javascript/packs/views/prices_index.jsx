import React from 'react'
import ReactDOM from 'react-dom'
import WriteUsModalProcessor from '../modals/write_us/write_us_modal_processor'

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<WriteUsModalProcessor buttonClass="prices-order-visualization-top-button" />,
    document.getElementById('write-us-top'));
  ReactDOM.render(<WriteUsModalProcessor buttonClass="order-visualization-bottom-button" />,
    document.getElementById('write-us-bottom'));
});
