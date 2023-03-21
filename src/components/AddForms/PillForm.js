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
    Input
} from "reactstrap";

import React, {useState} from "react";
import {getUsers} from "../profile/fakeProfiles";
import {MDBContainer} from "mdb-react-ui-kit";
const PillForm = () => {
    const [users] = useState(getUsers());
    return (
        <Row>
            <Col>

                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-bell me-2"> </i>
                        Add a new Pill
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="pillName">Pill name</Label>
                                <Input
                                    id="pillName"
                                    name="pillName"
                                    placeholder="eg Depon"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="pillDosage">Select # of Pills</Label>
                                <Input id="pillDosage" name="pillDosage" type="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelectMulti"><strong>Exclude</strong> Patient from taking this Pill</Label>
                                <Input
                                    id="exampleSelectMulti"
                                    multiple
                                    name="selectMulti"
                                    type="select"
                                >
                                    {users.map(user => (
                                        <option>{user.name}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" /> <Label check>Check me out</Label>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default PillForm;
