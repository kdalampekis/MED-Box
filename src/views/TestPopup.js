import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';

function TestPopup() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleOk = () => {
        setShow(false);
    };



    return (
        <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Time to take Depon</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>It's someTime Time for Michael to take Depon.</Modal.Body>
                    <Modal.Footer>
                        <Button className="btn" outline color="success" onClick={handleOk}>
                            OK
                        </Button>
                        <Button className="btn" outline color="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    );
}

export default TestPopup;
