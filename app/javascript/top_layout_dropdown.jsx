import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class TopLayoutDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { groups: [] };
  }

  componentWillMount() {
    var self = this;
    axios.get('/api/v1/groups').then(response => {
      self.setState({ groups: response['data'] });
    })
  }

  render() {
    let groups = this.state.groups.map(group => {
      return (
        <MenuItem key={`group-${group.name}`} href={`/portfolio/${group.slug}`}>{group.name}</MenuItem>
      )
    });

    return (
      <DropdownButton key={1} title="Portfolio" id="dropdown-button" className="layout-button">
        {groups}
      </DropdownButton>
    )
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<TopLayoutDropdown />, document.getElementById('dropdown'))
});
