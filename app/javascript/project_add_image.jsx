import React from 'react'
import ReactDOM from 'react-dom'

class ProjectAddImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    var self = this;
    axios.get('/api/v1/projects').then(response => {
      self.setState({ projects: response['data'] });
    })
  }

  render() {
    return(
      <div>
        <button className="btn btn-primary">Image Add</button>
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<ProjectAddImage />, document.getElementById('image-add'))
});
