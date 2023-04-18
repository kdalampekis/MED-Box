import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input} from "reactstrap";
import React, {useEffect, useState, useRef} from "react";
import { useParams } from "react-router";
import TimePicker from 'react-time-picker';
import "./TimePicker.css";
import axios from "axios";
import {API_URL} from "../../api";


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
    const [displayPills, setDisplayPills] = useState([])
    const [timeValue, setTimeValue] = useState('10:00');
    const [dayValue, setDayValue] = useState('Monday');
    const [doseValue, setDoseValue] = useState([]);



    useEffect(() => {
        axios.get(API_URL+'get_per_pills/')
            .then(response => {
                setDisplayPills(response.data);
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
        const { value } = event.target;
        setFormValues((prevValues) => {
            const updatedValues = [...prevValues];
            updatedValues[index] = {
                ...updatedValues[index],
                [key]: value,
            };
            return updatedValues;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        for (let i = 0; i < formValues; i++){
            console.log(formValues[i]);
        }
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
                    <span className={`rounded-circle me-3 text-${getIcon(timeValue).color}`} style={{fontSize: "3rem"}}>
                        <i className={getIcon(timeValue).icon} />
                    </span>
                    <Label className="rounded-circle me-3" size="sm" color={getIcon(timeValue).color}>Select Time</Label>
                    <TimePicker
                        id={`pillTime-${i}`}
                        name={`pillTime-${i}`}
                        className="form-control no-border"
                        disableClock={true}
                        onChange={(value) => handleInputChange({ target: { value } }, i, "time")}
                        value={formValue.time || timeValue}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for={`exampleSelectMulti-${i}`}>Select Multiple</Label>
                    <Input
                        id={`exampleSelectMulti-${i}`}
                        multiple
                        name={`selectMulti-${i}`}
                        type="select"
                        onChange={(value) => handleInputChange({ target: { value } }, i, "days")}
                        value={formValue.days || dayValue}
                        >
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for={`pillDosage-${i}`}>Dosage</Label>
                    <Input
                        id={`pillDosage-${i}`}
                        name={`pillDosage-${i}`}
                        type="select"
                        onChange={(value) => handleInputChange({ target: { value } }, i, "dosage")}
                        value={formValue.dosage}
                        >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
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
                            <Button className="btn" outline color="info" style={{paddingLeft: "10px", borderRadius:"50%", marginLeft: "20px"}} onClick={handleAddElement}>
                                +
                            </Button>
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
