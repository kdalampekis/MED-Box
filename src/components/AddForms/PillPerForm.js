import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input} from "reactstrap";
import React, {useEffect, useState, useRef} from "react";
import { useParams } from "react-router";
import TimePicker from 'react-time-picker';
import "./TimePicker.css";
import axios from "axios";
import {API_URL} from "../../api";
import "./button.css";
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

const PillPerForm = () => {

    const { id } = useParams();
    const [numElements, setNumElements] = useState(1);
    const lastElementRef = useRef(null);
    const [formValues, setFormValues] = useState([]);
    const [selectPills, setSelectPills] = useState([]);
    const [displayPills, setDisplayPills] = useState([]);


    useEffect(() => {
        axios.get(API_URL+'get_per_pills/')
            .then(response => {
                setDisplayPills(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const handleAddElement = () => {
        setNumElements(numElements + 1);
        setFormValues([...formValues, {}]);
        lastElementRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const handleInputChange = (event, index, key) => {
        const { name, value } = event.target;

        if (name === `selectMulti-${index}`) {
            // Convert the selectedOptions to an array of values
            const selectedValues = Array.from(event.target.selectedOptions, option => option.value);

            setFormValues(prevValues => {
                const updatedValues = [...prevValues];
                updatedValues[index] = {
                    ...updatedValues[index],
                    [key]: selectedValues,
                };
                return updatedValues;
            });
        } else if (name === `pillDosage-${index}`){
            setFormValues(prevValues => {
                const updatedValues = [...prevValues];
                updatedValues[index] = {
                    ...updatedValues[index],
                    [key]: value,
                };
                return updatedValues;
            });
        } else {
            setFormValues(prevValues => {
                const updatedValues = [...prevValues];
                updatedValues[index] = {
                    ...updatedValues[index],
                    [key]: value,
                };
                return updatedValues;
            });
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const user_id = id;
        const pill_id= displayPills.find(pill => pill.name === selectPills).id;
        console.log(user_id);
        console.log(pill_id);
        console.log(formValues);
        axios
            .post(API_URL + 'create_alarms/', {
                user_id,
                pill_id,
                formValues
            })
            .then((response) => {
                // Handle the response
                console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                // Handle the error
                console.log(error);
            });


    };


    const getIcon = (timeValue) => {
        const selectedTime = new Date(`2000-01-01T${timeValue}`);
        const selectedHour = selectedTime.getHours();
        if (selectedHour >= 6 && selectedHour < 12) {
            return timeData[0]; // Morning
        } else if (selectedHour >= 12 && selectedHour < 18) {
            return timeData[1]; // Noon
        } else {
            return timeData[2]; // Night
        }
    };


    const formElements = [];

    for (let i = 0; i < numElements; i++) {
        const formValue = formValues[i] || {};
        const ref = i === numElements - 1 ? lastElementRef : null;
        formElements.push(
            <div key={i} ref={ref}>
                <FormGroup className="d-flex align-items-center p-3 border-0">
                    <span className={`rounded-circle me-3 text-${getIcon(formValue.time).color}`} style={{fontSize: "3rem"}}>
                        <i className={getIcon(formValue.time).icon} />
                    </span>
                    <Label className="rounded-circle me-3" size="sm" color={getIcon(formValue.time).color}>Select Time</Label>
                    <TimePicker
                        id={`pillTime-${i}`}
                        name={`pillTime-${i}`}
                        className="custom-time-picker"
                        disableClock={true}
                        onChange={(value) => handleInputChange({ target: { value } }, i, "time")}
                        value={formValue.time}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for={`exampleSelectMulti-${i}`}>Select Multiple</Label>
                    <Input
                        id={`exampleSelectMulti-${i}`}
                        multiple
                        name={`selectMulti-${i}`}
                        type="select"
                        onChange={(event) => handleInputChange(event, i, "days")}
                        value={formValue.days}
                        >
                        <option value="1">Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="5">Friday</option>
                        <option value="6">Saturday</option>
                        <option value="7">Sunday</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for={`pillDosage-${i}`}>Dosage</Label>
                    <Input
                        id={`pillDosage-${i}`}
                        name={`pillDosage-${i}`}
                        type="select"
                        onChange={(event) => handleInputChange(event, i, "dosage")}
                        value={formValue.dosage}
                        >
                            <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Input>
                </FormGroup>
            </div>
        );
    }


    return (
        <Row>
            <Col>
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-bell me-2"> </i>
                        Add a new Pill for Test
                    </CardTitle>
                    <CardBody>
                        <legend>Choose a Pill</legend>
                        <Form onSubmit={handleSubmit}>
                                {displayPills.map(pill => (
                                    <FormGroup check>
                                        <Input name="pill_name"
                                               type="radio"
                                               value={pill.name}
                                               checked={selectPills === pill.name}
                                               onChange={(e) => setSelectPills(e.target.value)}/>
                                        <Label check>
                                            <strong>
                                                {pill.name}
                                            </strong>
                                        </Label>
                                    </FormGroup>
                                ))}
                            <Label for="pillDosage">Set Time Intake</Label>
                            <button className="blue-button" onClick={handleAddElement}>+</button>
                            {formElements}
                            <Button type="submit">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default PillPerForm;
