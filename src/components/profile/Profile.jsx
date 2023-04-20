import React, {useEffect, useState} from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import {useParams} from "react-router";
import {Badge, Button} from "reactstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import { API_URL } from '../../api';
import Calendar from "./Calendar";



export default function Profile() {
    //const id = useLocation().state.id;
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(API_URL+`get_user/${id}/`)
            .then(response => {
                setUser(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src= {user.imgSrc}
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-md-0">
                            <MDBCardBody>
                                <MDBCardText className="mb-1"><span className="text-primary font-italic me-1"><h3>Prescription Pills</h3></span></MDBCardText>
                                <MDBCardText className="mb-1"><span className="text-secondary font-italic me-1"><h5>Today's Order</h5></span></MDBCardText>
                                {user.prescription_pills && user.prescription_pills.map(pill => (
                                    <React.Fragment key={pill.id}>
                                        <MDBCardText className="mt-2 mb-2" style={{ fontSize: '.77rem'}}>
                                            <h5>{pill.name}
                                                <Badge color="secondary" style={{marginLeft: '8px'}}>{0}/{3}</Badge>
                                            </h5>
                                        </MDBCardText>
                                        <MDBProgress className="rounded" >
                                            <MDBProgressBar width={30} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                    </React.Fragment>
                                ))}
                            </MDBCardBody>
                            <hr style={{color: "white"}}/>
                            <MDBCardBody>
                                <Link to={{pathname: `/pillPerForm/${id}`}} style={{ textDecoration: 'none' }}>
                                    <Button
                                        className="btn"
                                        outline
                                        color="primary"
                                        style={{
                                            position: "absolute",
                                            bottom: 10,
                                            right: 10,
                                            margin: "10px",
                                        }}
                                    >
                                        Subscribe to a pill
                                    </Button>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{user.full_name}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Age</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{user.age}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Gender</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{user.gender}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{user.email}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Phone</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{user.phone}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Description</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{user.description}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCol lg="12" md="12" sm="12">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <Calendar user_id={id}/>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}