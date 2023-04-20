import React, { useState } from 'react';
import {Button} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";

function Pop() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="btn" outline color="info" onClick={handleShow}>
                Give me
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Click Ok to <strong>continue</strong> or Cancel to <strong>return</strong></Modal.Body>
                <Modal.Footer>
                    <Link to={{pathname:'/step1'}} style={{textDecoration: "none"}}>
                        <Button className="btn" outline color="success" onClick={handleClose}>
                            OK
                        </Button>
                    </Link>
                    <Button className="btn" outline color="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Pop;