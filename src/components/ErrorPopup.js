// Pop component
import React, {useState} from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';

function ErrorPopup(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal show={!!props.errorMsg} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.errorMsg}</Modal.Body>
            <Modal.Footer>
                <Button className="btn" outline color="danger" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorPopup;
