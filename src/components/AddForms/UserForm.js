import React, { useState } from 'react';
import {
    Card,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
} from 'reactstrap';
import { DatePicker } from 'reactstrap-date-picker';
import { API_URL } from '../../api';
import axios from 'axios';


export default function UserForm() {
    const [value, setValue] = useState('');
    const [formattedValue, setFormattedValue] = useState('');


    const handleChange = (v, f) => {
        setValue(v);
        setFormattedValue(f);
        // Convert the value to a Date object
        const date = new Date(v);
        if (!isNaN(date)) {
            setValue(date);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formattedDate = value ? value.toISOString().split('T')[0] : '';

        const formData = new FormData();
        formData.append('first_name', event.target.elements.first_name.value);
        formData.append('last_name', event.target.elements.last_name.value);
        formData.append('password', event.target.elements.password.value);
        formData.append('email', event.target.elements.email.value);
        formData.append('phone', event.target.elements.phone.value);
        formData.append('birth_date', formattedDate);
        formData.append('gender', event.target.elements.gender.value);
        formData.append('description', event.target.elements.description.value);

        // Send a POST request to the backend API endpoint
        axios
            .post(API_URL + 'register_user/', formData)
            .then((response) => {
                // Handle the response
                console.log(response.data);
                window.location = './login';
            })
            .catch((error) => {
                // Handle the error
                console.log(error);
                window.location.reload();
            });
    };

    const handleClick = () => {
        window.location.reload();
    }

    return(
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
            <Card className="w-100" style={{ maxWidth: "800px" }}>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i class="bi bi-arrow-left-circle" style={{fontSize: "30px", cursor:"pointer", color:"#2962FF"}} onClick={handleClick}/>
                        <h3 style={{textAlign:"center"}}>Welcome</h3>
                    </CardTitle>
                    <CardBody style={{ padding: 10, margin: 0 }}>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input id="firstName" name="first_name" placeholder="eg John" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input id="lastName" name="last_name" placeholder="eg Doe" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input id="password" name="password"  type="password" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="repeat">Repeat the password</Label>
                                <Input id="repeat" name="repeat"  type="password" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="example@gmail.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">Phone Number</Label>
                                <Input id="phone" name="phone" placeholder="69xxxxxxxx" type="number" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Date of Birth</Label>
                                <DatePicker value={value} onChange={(v, f) => handleChange(v, f)} />
                                <input type="hidden" name="birth_date" value={formattedValue} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="gender">Gender</Label>
                                <Input id="gender" name="gender" type="select">
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Other</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Comments on the patient</Label>
                                <Input id="description" name="description" type="textarea" />
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
        </Container>
    );
};



