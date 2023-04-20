import {Button, Card, CardBody, CardTitle, Row} from "reactstrap";
import React from "react";
import "./steps.css";
import {Link} from "react-router-dom";
export default function Step2(){
    return(
        <Card className="card">
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <Row>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                         className="bi bi-camera-reels" viewBox="0 0 16 16">
                        <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                        <path
                            d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
                        <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    <span><h2 style={{textAlign:"center"}}>2. Stand in a visible spot for camera detection</h2></span>
                </Row>
            </CardTitle>
            <CardBody>
                <div style={{textAlign:"center"}}>
                    <p style={{fontSize: "20px"}}>When using a camera with a machine learning (ML) algorithm to detect your presence,
                        it is important to take a step back. This allows the algorithm to better analyze your
                        features and improve accuracy, while also preventing distortion that can occur when you
                        are too close to the camera. By giving the ML algorithm a clear view of you, you can ensure
                        that it can properly detect and identify you.</p>
                </div>
                <hr style={{color: "white"}}/>
                <div className="button-group" style={{padding:"20px"}}>
                    <div className="btn1">
                        <Link to={{pathname:'/step1'}} style={{textDecoration: "none"}}>
                            <Button className="btn" color="info" size="lg">
                                Back
                            </Button>
                        </Link>
                    </div>
                    <div className="btn2">
                        <Button className="btn" color="info" size="lg">
                            Next
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}