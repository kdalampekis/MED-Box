import { Button, Card, CardBody, CardTitle, Container, Form, FormGroup, Input } from "reactstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../api";

export default function Login({ onLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post(API_URL + 'login/', {username, password})
            .then((response) => {
                const src = response.data.img;
                const id = response.data.user_id
                onLogin({ username, password, src, id });
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
                window.location.reload();
            });
    }


        return(
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Card className="w-100" style={{ maxWidth: "500px" }}>
                <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-book-open"
                        style={{ marginRight: "20px" }}
                    >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    <span>Login Page</span>
                    <span style={{cursor: "pointer", marginLeft: "250px"}}>
                        Register
                    </span>
                </CardTitle>
                <CardBody style={{ padding: 10, margin: 0 }}>
                    <Form
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                        onSubmit={handleSubmit}
                    >
                        <img src={"./users/UserLogo.jpeg"} alt="User Logo" style={{ maxWidth: "100px", maxHeight: "100px" }}/>
                        <h3>Already have an Account?</h3>
                        <FormGroup>
                            <Input
                                id="email"
                                name="email"
                                placeholder="full name"
                                type="text"
                                style={{ width: "200px", height:"45px" }}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                                style={{ width: "250px", height:"45px" }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </FormGroup>
                            <Button className="btn" color="info" size="lg" block type="submit">
                                Get Started
                            </Button>
                    </Form>
                </CardBody>
            </Card>
        </Container>
        );


}
