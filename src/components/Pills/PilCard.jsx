import React, {useEffect} from 'react';
import {CardBody, CardTitle, Col, Row} from "reactstrap";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Button} from 'reactstrap';
import Card from 'react-bootstrap/Card';
import './pillCard.css';
import axios from "axios";
import { API_URL } from '../../api';
import TestPopup from "../../views/TestPopup";
import Pop from "../Pop";

export default function PillCard() {

    const [pills, setPills] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const handleClick = () => {
        setShowPopup(true);
    };


    useEffect(() => {
        axios.get(API_URL+'get_pills/')
            .then(response => {
                setPills(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return (
        <>
        <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <Row>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                         className="bi bi-capsule-pill" viewBox="0 0 16 16">
                        <path
                            d="M11.02 5.364a3 3 0 0 0-4.242-4.243L1.121 6.778a3 3 0 1 0 4.243 4.243l5.657-5.657Zm-6.413-.657 2.878-2.879a2 2 0 1 1 2.829 2.829L7.435 7.536 4.607 4.707ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-.5 1.042a3 3 0 0 0 0 5.917V9.042Zm1 5.917a3 3 0 0 0 0-5.917v5.917Z"/>
                    </svg>
                    <span><h2 style={{textAlign:"center"}}>Take a Pill</h2></span>
                </Row>
            </CardTitle>
        </Card>
        <Row>
            {pills.map(pill => (
                <Col sm="10" md ="6" lg="10" xl="6" key={pill.id} style={{ borderRadius: '15px'}}>
                    <div className='pillCard'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pill.imageSrc} />
                            <Card.Body className="p-3">
                                <Card.Title>{pill.name}</Card.Title>
                                <Card.Text>
                                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                         style={{ backgroundColor: '#efefef' }}>
                                        <div>
                                            <p className="small text-muted mb-1">Description</p>
                                            <p className="mb-0">{pill.description} </p>
                                        </div>
                                    </div>
                                </Card.Text>
                                <div className="button-group">
                                    <Pop/>
                                    <Link to={{pathname: `/pill/${pill.id}`}} style={{ textDecoration: 'none' }}>
                                        <Button className="btn" outline color="info">
                                            More Info
                                        </Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            ))}
        </Row>
            {showPopup && <TestPopup handleClose={() => setShowPopup(true)} />}
        </>

    );
}