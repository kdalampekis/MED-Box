import {Button, Card, CardBody, CardTitle, Row, Alert} from "reactstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../api";
import {useParams} from "react-router";
import "./steps.css";

export default function Step3() {
    const {id} = useParams();
    const [isUser, setisUser] = useState(null);

    useEffect(() => {
        const verify = async () => {
            try {
                const response = await axios.get(API_URL + `verify_user/${id}/`);
                console.log(response.data);
                setisUser(response.data.message); // Assuming the message is true/false
            } catch (error) {
                console.log(error.message);
            }
        };
        verify();
    }, [id]);

    const sendTakenData = (takenData) => {
        if (takenData) {
            axios
                .post(API_URL + `take_medication/${id}/`)
                .then((response) => {
                    console.log(response.data);
                    window.location.href = "/";
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    if (isUser === null) {
        return null;
    }

    return isUser ? (
        <Card className="card">
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <Row>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="256"
                        height="256"
                        viewBox="0 0 256 256"
                    >
                        <defs></defs>
                        <g
                            style={{
                                stroke: "none",
                                strokeWidth: 0,
                                strokeDasharray: "none",
                                strokeLinecap: "butt",
                                strokeLinejoin: "miter",
                                strokeMiterlimit: 10,
                                fill: "none",
                                fillRule: "nonzero",
                                opacity: 1,
                            }}
                            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                        >
                            <path
                                d="M 43.121 62.779 c -0.046 0 -0.093 -0.001 -0.14 -0.002 c -1.375 -0.039 -2.672 -0.642 -3.588 -1.666 L 26.376 46.546 c -1.84 -2.059 -1.663 -5.22 0.396 -7.06 c 2.059 -1.842 5.22 -1.663 7.06 0.396 l 9.492 10.621 l 31.347 -31.346 c 1.951 -1.952 5.119 -1.952 7.07 0 c 1.953 1.953 1.953 5.119 0 7.071 L 46.656 61.314 C 45.717 62.254 44.445 62.779 43.121 62.779 z"
                                style={{
                                    stroke: "none",
                                    strokeWidth: 1,
                                    strokeDasharray: "none",
                                    strokeLinecap: "butt",
                                    strokeLinejoin: "miter",
                                    strokeMiterlimit: 10,
                                    fill: "rgb(0,221,16)",
                                    fillRule: "nonzero",
                                    opacity: 1,
                                }}
                                transform="matrix(1 0 0 1 0 0)"
                            />
                            <path
                                d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 8.231 0 16.286 2.244 23.292 6.491 c 2.362 1.431 3.116 4.505 1.686 6.867 c -1.432 2.362 -4.506 3.117 -6.868 1.685 C 57.666 11.744 51.403 10 45 10 c -19.299 0 -35 15.701 -35 35 s 15.701 35 35 35 s 35 -15.701 35 -35 c 0 -1.487 -0.095 -2.987 -0.28 -4.458 c -0.348 -2.74 1.592 -5.242 4.332 -5.589 c 2.74 -0.349 5.241 1.593 5.588 4.332 C 89.879 41.172 90 43.094 90 45 C 90 69.813 69.813 90 45 90 z"
                                style={{
                                    stroke: "none",
                                    strokeWidth: 1,
                                    strokeDasharray: "none",
                                    strokeLinecap: "butt",
                                    strokeLinejoin: "miter",
                                    strokeMiterlimit: 10,
                                    fill: "rgb(0,221,16)",
                                    fillRule: "nonzero",
                                    opacity: 1,
                                }}
                                transform="matrix(1 0 0 1 0 0)"
                            />
                        </g>
                    </svg>
                    <span>
      <h2 style={{textAlign: "center"}}>
                      3. Take your Pill
      </h2>
    </span>
                </Row>
            </CardTitle>
            <CardBody>
                <div style={{textAlign: "center"}}>
                    <p style={{fontSize: "20px"}}>
                        You have been scanned and authorized to take your proscribed medication.
                        Enjoy your health!
                    </p>
                </div>
                <hr style={{color: "white"}}/>
                <div className="button-group" style={{padding: "20px"}}>
                    <div className="btn2">
                        <Button
                            className="btn"
                            color="info"
                            size="lg"
                            onClick={() => sendTakenData(true)}
                        >
                            Take the Pill
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    ) : (
        <Alert color="danger">You are not authorised to take this pill</Alert>
    );
}