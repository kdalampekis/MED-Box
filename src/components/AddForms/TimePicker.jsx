/*
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const theme = createTheme({
    typography: {
        fontSize: 12,
        fontFamily: "Segoe UI, Helvetica, Arial, sans-serif",
    },
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#f44336',
        },
    },
});

export default function Timer() {

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{margin: "5% 40%"}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <MobileDatePicker
                            label="Date mobile"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <TimePicker
                            label="Time"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <DateTimePicker
                            label="Date&Time picker"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </div>
        </ThemeProvider>

    );
}*/


/*import React, { useState } from 'react';
import { TimePicker } from 'react-ios-time-picker';

export default function Timer(){
    const [value, setValue] = useState('10:00');

    const onChange = (timeValue) => {
        setValue(timeValue);
    }

    return (
        <div>
            <TimePicker onChange={onChange} value={value} />
        </div>
    );
}*/

/*
import React, { useState } from 'react';

export default function Timer(){
    const [value, setValue] = useState('10:00');

    const onChange = (timeValue) => {
        setValue(timeValue);
    }

    return (
        <div>
            <div>
                <label htmlFor="appt-time">
                    Choose an appointment time (opening hours 12:00 to 18:00):
                </label>
                <input
                    id="appt-time"
                    type="time"
                    name="appt-time"
                    min="12:00"
                    max="18:00"
                    required
                    pattern="[0-9]{2}:[0-9]{2}"/>
                <span className="validity"></span>
            </div>
            <div>
                <input type="submit" value="Submit form"/>
            </div>
        </div>
    );
}
*/


import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import {Col, Row} from "reactstrap";

export default function Timer() {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Row>
            <Col>
                <Stack spacing={3}>
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="Time"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <DateTimePicker
                        label="Date&Time picker"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </Col>
        </Row>
    );
}