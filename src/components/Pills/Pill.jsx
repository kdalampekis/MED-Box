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
import {useCookies} from "react-cookie";


export default function Pill() {
    const { id } = useParams();
    const [pill, setPill] = useState([]);
    const [commentText, setCommentText] = useState("");
    const myButton = document.getElementById('myButton');
    const [disabled, setDisabled] = useState('');



    useEffect(() => {
        axios.get(API_URL+`get_pill/${id}/`)
            .then(response => {
                setPill(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios
            .post(API_URL + 'post_pill_comment/', {
                user_id: cookies.user.id,
                pill_id: id,
                commentText: commentText,
            })
            .then((response) => {
                // Handle the response
                console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                // Handle the error
                console.log(error);
            });

    }

    const handleClick = () => {
        axios
            .post(API_URL + 'deload/', {
                pill_id: id,
            })
            .then((response) => {
                // Handle the response
                console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                // Handle the error
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get(API_URL+`get_disable/${id}/`)
            .then(response => {
                setDisabled(response.data.disabled);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    if (disabled === true) {
        myButton.disabled = true;
    }


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
                                <hr style={{color: "white"}}/>
                                <Button
                                    className="btn"
                                    outline
                                    color="danger"
                                    style={{
                                        position: "absolute",
                                        bottom: 10,
                                        right: 10,
                                        margin: "10px",
                                    }}
                                    onClick={handleClick}
                                    id="myButton"
                                >
                                    Empty
                                </Button>
                                <Button outline color="info">Load</Button>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="7">
                        <Alert color="danger">{pill.warning}</Alert>
                        <Comments id={pill.id}/>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="exampleText">Leave a Comment about this pill</Label>
                                <Input
                                    id="exampleText"
                                    name="commentText"
                                    type="textarea"
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}                                />
                            </FormGroup>
                            <Button type="submit">Post</Button>
                        </Form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}