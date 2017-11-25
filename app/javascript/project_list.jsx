import React from 'react'
import ReactDOM from 'react-dom'
import SlickCarousel from './slick_carousel'
import axios from 'axios'

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] }
  }

  componentDidMount() {
    var self = this;
    axios.get('/api/v1/projects').then(response => {
      self.setState({ projects: response['data'] });
    })
  }

  render() {
    if(this.state.projects.length === 0)
      return <div>Loading...</div>;
    else {
      let projectSlicks = this.state.projects.map(project => {
        return (
          <div className="col-md-6 col-sm-6 col-lg-6" key={`project-${project.name}`}>
            <div className="portfolio-carousel"><SlickCarousel project={project} /></div>
          </div>
        )
      });

      return <div className="row">{projectSlicks}</div>;
    }
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<ProjectList />, document.getElementById('project-list'))
});

