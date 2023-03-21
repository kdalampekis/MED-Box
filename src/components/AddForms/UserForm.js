import React from "react";
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText, ListGroupItem
} from "reactstrap";

const UserForm = () => {
    return (
        <Row>
            <Col>
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-bell me-2"> </i>
                        Add a new Pill
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    placeholder="eg John"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    placeholder="eg Doe"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="age">Age</Label>
                                <Input
                                    id="age"
                                    name="age"
                                    placeholder="eg 20"
                                    type="number"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="gender">Select # of Pills</Label>
                                <Input id="gender" name="gender" type="select">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Comments on the patient</Label>
                                <Input id="exampleText" name="text" type="textarea" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input id="exampleFile" name="file" type="file" />
                                <FormText>
                                    You can upload the medical exams associated with the pills you take
                                </FormText>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default UserForm;