import React, {useEffect, useState} from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import {useParams} from "react-router";
import Comments from "./Comments";
import {Alert, Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import { API_URL } from '../../api';


export default function Pill() {
    const { id } = useParams();
    const [pill, setPill] = useState([]);

    useEffect(() => {
        axios.get(API_URL+`get_pill/${id}/`)
            .then(response => {
                setPill(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="5">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src= {pill.imageSrc}
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{pill.name}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="9">
                                        <MDBCardText>Description</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{pill.description}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Weight</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{pill.weight}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Company</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{pill.company}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Remaining</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{pill.inventory}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="7">
                        <Alert color="danger">{pill.warning}</Alert>
                        <Comments id={pill.id}/>
                        <Form>
                            <FormGroup>
                                <Label for="exampleText">Leave a Comment about this pill</Label>
                                <Input id="exampleText" name="text" type="textarea" />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}