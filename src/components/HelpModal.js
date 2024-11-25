import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const HelpModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shipping Options</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Standard:</strong> Delivery within 5-7 business days. Cost-effective for non-urgent items.</p>
                <p><strong>Express:</strong> Delivery within 1-2 business days. Suitable for urgent deliveries.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default HelpModal;