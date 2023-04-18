import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';


function PopUp() {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
    };


    return (
        <>
            {show && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please fill out the form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>There was a problem processing your request</Modal.Body>
                    <Modal.Footer>
                        <Button className="btn" outline color="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default PopUp;
