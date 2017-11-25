import React from 'react'
import { Button, Modal } from 'react-bootstrap'

class WriteUsModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>One</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default WriteUsModal;
