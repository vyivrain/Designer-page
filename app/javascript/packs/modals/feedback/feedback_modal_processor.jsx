import React from 'react'
import WriteUsModal from './feedback_modal'

export default class FeedbackModalProcessor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    let buttonName = I18n.t('feedback_leave');
    return (
      <div className="feedback-leave">
        <button onClick={this.toggleModal.bind(this)}>{buttonName}</button>
        <WriteUsModal showModal={this.state.isOpen} onClose={this.toggleModal.bind(this)}/>
      </div>
    )
  }
}
