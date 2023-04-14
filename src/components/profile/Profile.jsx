import React, {useState} from 'react';
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
import {getUserName, getUserAge, getUserGender, getUserPills, getUserImg, getEmail, getPillSum, getUserPhone, getUserAddress} from "./fakeProfiles";
import {Badge, Button} from "reactstrap";
import SalesChart from "../dashboard/SalesChart";
import {Link} from "react-router-dom";


export default function Profile() {
    //const id = useLocation().state.id;
    const { id } = useParams();
    console.log(id);
    const dictionary = getUserPills(id);
    const entries = Object.entries(dictionary);
    const sum = getPillSum(id);
    console.log(sum);


    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src= {getUserImg(id)}
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
                                {entries.map(([key, value]) => (
                                    <React.Fragment>
                                        <MDBCardText className="mt-2 mb-2" style={{ fontSize: '.77rem'}}>
                                            <h5>{key}
                                                <Badge color="secondary" style={{marginLeft: '8px'}}>{value}/{sum}</Badge>
                                            </h5>
                                        </MDBCardText>
                                            <MDBProgress className="rounded" >
                                                <MDBProgressBar width={(value/sum)*100} valuemin={0} valuemax={100} />
                                            </MDBProgress>
                                    </React.Fragment>
                                    ))}
                            </MDBCardBody>

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
                                        Add a pill
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
                                        <MDBCardText className="text-muted">{getUserName(id)}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Age</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{getUserAge(id)}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Gender</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{getUserGender(id)}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{getEmail(id)}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Phone</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{getUserPhone(id)}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Address</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{getUserAddress(id)}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBRow>
                            <SalesChart/>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}