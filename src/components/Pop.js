import React, { useState } from 'react';
import {Button} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../api";

function Pop(props) {
    const [show, setShow] = useState(false);
    const [box, setBox] = useState(false);
    const [message, setMessage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  /*  function handleClick(){
        axios.post(API_URL + 'take_pill/', { pill_id: props.pill_id })
            .then(response => {
                console.log(response.data);
                setMessage(response.data.message);
            })
            .catch(error => {
                console.log(error);
            });
    }*/

    function handleOk(){
        setShow(false);
    }

    return (
        <>
            <Button className="btn" outline color="info" onClick={() => {
                handleShow();
            }}>
                Give me
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{message}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Click Ok to <strong>continue</strong> or Cancel to <strong>return</strong></Modal.Body>
                <Modal.Footer>

                    <Link to={{pathname:'/step1'}} style={{textDecoration: "none"}}>

                        <Button className="btn" outline color="success" onClick={handleOk}>
                            OK
                        </Button>

                    </Link>

                    <Button className="btn" outline color="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Pop;