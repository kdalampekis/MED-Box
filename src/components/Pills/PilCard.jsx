import React from 'react';
import {Col, Row} from "reactstrap";
import { Link } from 'react-router-dom';
import {getPills} from "./fakePills";
import { useState } from 'react';
import {Button} from 'reactstrap';
import Card from 'react-bootstrap/Card';
import './pillCard.css';
import Pop from "../Pop"




export default function PillCard() {
    const [pills] = useState(getPills());
    return (
        <Row>
            {pills.map(pill => (
                <Col sm="10" md ="10" lg="10" xl="6" key={pill.id} style={{ borderRadius: '15px'}}>
                    <div className='pillCard'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pill.img} />
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

    );
}