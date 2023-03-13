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
    FormText, ListGroupItem, ListGroup,
} from "reactstrap";
import PopUp from "../PopUp";
import Time from '../Time';
import React, {useState} from "react";
const timeData = [
    {
        title: "Morning",
        icon: "bi bi-brightness-high",
        color: "warning",
    },
    {
        title: "Noon",
        icon: "bi bi-cloud-moon",
        color: "info",
    },
    {
        title: "Night",
        icon: "bi bi-moon-stars",
        color: "primary",
    },
];

const PillForm = () => {
    //const [buttonPopUp, setButtonPopUp] = useState(false); //for popup use
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
                                {/*<div onClick={() => setButtonPopUp(true)}>
                                    <Button className="btn" outline color="primary">
                                        Set pill intake time
                                    </Button>
                                </div>
                                <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                                    <h3>My popup</h3>
                                </PopUp>*/}
                                <Time/>
                                <Label for="pillDosage">Set Time Intake</Label>
                                    {timeData.map((feed, index) => (
                                        <ListGroupItem
                                            key={index}
                                            action
                                            href="#"
                                            className="d-flex align-items-center p-3 border-0"
                                        >
                                            <Button
                                                className="rounded-circle me-3"
                                                size="sm"
                                                color={feed.color}
                                            >
                                                <i className={feed.icon}/>
                                            </Button>
                                            {feed.title}
                                        </ListGroupItem>

                                    ))}
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input id="exampleFile" name="file" type="file" />
                                <FormText>
                                    You can upload the medical exams associated with the pills you take
                                </FormText>
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
