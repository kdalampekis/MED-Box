import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import { Button, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import axios from "axios";
import { API_URL } from '../../api';
import moment from 'moment-timezone';


export default function ProfileCard() {
    const [users, set_users] = useState([]);

    useEffect(() => {
        axios.get(API_URL + 'getUserCards/')
            .then(response => {
                set_users(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return (
        <Row>
            {users.map(user => (
                <Col sm="10" md="10" lg="10" xl="6">
                    <MDBContainer>
                        <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className="p-4">
                                <div className="d-flex text-black">
                                    <div className="flex-shrink-0">
                                        <MDBCardImage
                                            src={user.imgSrc}
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: '150px' }}
                                            fluid />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <MDBCardTitle>{user.full_name}</MDBCardTitle>
                                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                             style={{ backgroundColor: '#efefef' }}>
                                            {user.prescription_pill.name && user.prescription_pill.time ?
                                                <div>
                                                    <p className="small text-muted mb-1">Next Pill Intake</p>
                                                    <p className="mb-0">{user.prescription_pill.name}</p>
                                                    <p className="mb-0">{moment.tz(user.prescription_pill.time, 'HH:mm:ss', 'Europe/Athens').format('h:mm A')}</p>
                                                </div>
                                                :
                                                <p className="text-muted">No prescription pills scheduled.</p>
                                            }
                                        </div>
                                        <div className="d-flex pt-2">
                                            <Link to={{ pathname: `/profile/${user.id}` }} style={{ textDecoration: 'none' }}>
                                                <Button className="btn" outline color="info">
                                                    info
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </Col>
            ))}
        </Row>
    );
}
