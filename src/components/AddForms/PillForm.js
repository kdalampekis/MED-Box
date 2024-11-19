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
    Input, Alert
} from "reactstrap";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../api";
import FormAlarm from "./FormAlarm";

const PillForm = () => {

    const [full, setFull] = useState(false);
    const [message, setMessage] = useState('');
    const [id, setId] = useState('');
    const [inv, setInv] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        // Retrieve the form data
        const formData = new FormData(event.target);

        // Get the form values
        const name = formData.get('name');
        const description = formData.get('description');
        const warning = formData.get('warning');
        const company = formData.get('company');
        const inventory = formData.get('inventory');
        const weight = formData.get('weight') + 'mg';
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
                if (response.data.full){
                    setFull(true);
                    setMessage(response.data.message);
                }
                else{
                    console.log(response.data.id);
                    setFull(false);
                    setInv(response.data.counter);
                    setId(response.data.id);
                }
            })
            .catch((error) => {
               console.log(error);
            });
    };

     const reset = () =>{
        axios.post(API_URL+ `after_insert_pill/${id}/`)
        .then(response => {
            console.log(response.data.message);
            window.location.href = "";
        })
        .catch(error => {
            console.log(error);
        })
    }

    if (inv === 0){
        reset();
    }

   

    console.log(inv);



    const handlePillInsert = () => {
        axios.post(API_URL+ `insert_pill/${id}/`)
        .then(response => {
            console.log(response.data.message);
            setInv(inv-1);
          })
          .catch(error => {
            console.log(error);
          });
        
    };

    if (!full && id){
        return (
        <Card className="card">
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <Row>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="blue"
                     className="bi bi-water" viewBox="0 0 16 16">
                    <path
                        d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z"/>
                </svg>
                <span><h2 style={{textAlign: "center"}}>Insert the pills in the machine</h2></span>
            </Row>
        </CardTitle>
        <CardBody>
            <div style={{textAlign: "center"}}>
                <p style={{fontSize: "20px"}}>Insert the pill and then press next to insert another</p>
            </div>
            <hr style={{color: "white"}}/>
            <div className="button-group" style={{padding: "20px"}}>
                <div className="btn2">
                    <Button className="btn" color="info" size="lg" onClick={handlePillInsert}>
                        Next
                    </Button>
                </div>
            </div>
        </CardBody>
    </Card>
        )
    }


    return (
        <Row>
            <Col>
                <Card>
                    {full && <Alert color="danger"><h3>{message}</h3></Alert>}
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
                                <Label for="weight">Weight</Label>
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
