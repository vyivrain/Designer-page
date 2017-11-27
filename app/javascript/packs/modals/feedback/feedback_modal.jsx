import React from 'react'
import { Modal } from 'react-bootstrap'

export default class FeedbackModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formParams: {}};
  }

  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.onClose} dialogClassName="feedback-modal">
          <Modal.Header closeButton>
            <Modal.Title>{I18n.t('feedback_leave').toUpperCase()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input type="text" value={this.state.formParams.name} placeholder={I18n.t('write_us_form.name')}/>
              <input type="text" value={this.state.formParams.email}  placeholder={I18n.t('write_us_form.email')}/>
              <textarea value={this.state.formParams.text}  placeholder={I18n.t('write_us_form.text')}/>
              <div className="submit-decorator">
                <input type="submit" value={I18n.t('feedback_form.send')} />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
