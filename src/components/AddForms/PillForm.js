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
import axios from "axios";
import {API_URL} from "../../api";
import FormAlarm from "./FormAlarm";

const PillForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        // Retrieve the form data
        const formData = new FormData(event.target);

        // Get the form values
        const name = formData.get('name');
        const description = formData.get('description');
        const warning = formData.get('warning') + 'mg';
        const company = formData.get('company');
        const inventory = formData.get('inventory');
        const weight = formData.get('weight');
        const prescription = formData.get('prescription');

        // Validate the form data
        if (!name || !description || !warning || !company || !inventory) {
            return(<FormAlarm/>);
        }

        const isPrescription = !!prescription;
        // Send a POST request to the backend API endpoint

        console.log(name);
        console.log(description);
        console.log(warning);
        console.log(company);
        console.log(inventory);
        console.log(weight);
        console.log(prescription);
        console.log(isPrescription);

        axios
            .post(API_URL + 'create_pill/', {
                name,
                description,
                warning,
                company,
                inventory,
                weight,
                prescription: isPrescription,
            })
            .then((response) => {
                // Handle the response
                console.log(response.data);
            })
            .catch((error) => {
                // Handle the error
                console.log(error);
            });
    };


    return (
        <Row>
            <Col>

                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-bell me-2"> </i>
                        Add a new Pill
                    </CardTitle>
                    <CardBody>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="pillName">Pill name</Label>
                                <Input
                                    id="pillName"
                                    name="name"
                                    placeholder="eg Depon"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Description</Label>
                                <Input id="exampleText" name="description" type="textarea" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Warnings</Label>
                                <Input id="exampleText" name="warning" type="textarea" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="pillName">Company name</Label>
                                <Input
                                    id="pillName"
                                    name="company"
                                    placeholder="eg Phizer"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="pillDosage">Select # of Pills</Label>
                                <Input id="pillDosage" name="inventory" type="select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="weight">Phone Number</Label>
                                <Input id="weight" name="weight" placeholder="25mg" type="number" />
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" name="perscription"/>
                                <Label check>Is this a Prescription Pill ?</Label>
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default PillForm;
