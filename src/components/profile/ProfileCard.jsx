import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import {Button} from "reactstrap";
import { Link } from 'react-router-dom';
import {getUsers} from "./fakeProfiles";
import { useState } from 'react';

export default function ProfileCard() {
    const [users] = useState(getUsers());
    return (
        <div className="vh-100">
            <MDBContainer>
                {users.map(user => (
                <MDBRow className="justify-content-center">
                    <MDBCol md="9" lg="7" xl="5" className="mt-5">
                        <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className="p-4">
                                <div className="d-flex text-black">
                                    <div className="flex-shrink-0">
                                        <MDBCardImage
                                            src={user.img}
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: '150px' }}
                                            fluid />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <MDBCardTitle>{user.name}</MDBCardTitle>


                                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                             style={{ backgroundColor: '#efefef' }}>
                                            <div>
                                                <p className="small text-muted mb-1">Age</p>
                                                <p className="mb-0">{user.age}</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="small text-muted mb-1">Gender</p>
                                                <p className="mb-0">{user.gender}</p>
                                            </div>
                                            <div>
                                                <p className="small text-muted mb-1">#Pills</p>
                                                <p className="mb-0">{user.prescription_pills.length}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex pt-2">
                                                <Link to={{pathname: './profile', state: user.id}} style={{ textDecoration: 'none' }}>
                                                    <Button className="btn" outline color="info">
                                                    info
                                                    </Button>
                                                </Link>
                                        </div>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                ))}
            </MDBContainer>
        </div>
    );
}