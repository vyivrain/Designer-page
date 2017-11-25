import React from 'react'
import ReactDOM from 'react-dom'
import WriteUsModal from './write_us_modal'

export default class WriteUsModalProcessor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div className="text-center">
        <button onClick={this.toggleModal.bind(this)} className={this.props.buttonClass}>Заказать визуализацию</button>
        <WriteUsModal showModal={this.state.isOpen} onClose={this.toggleModal.bind(this)}/>
      </div>
    )
  }
}
