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
    FormText,
} from "reactstrap";
import PopUp from "../PopUp";
import {useState} from "react";

const PillForm = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false); //for popup use
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
                                <div onClick={() => setButtonPopUp(true)}>
                                    <Button className="btn" outline color="primary">
                                        Set pill intake time
                                    </Button>
                                </div>
                                <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                                    <h3>My popup</h3>
                                </PopUp>
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
