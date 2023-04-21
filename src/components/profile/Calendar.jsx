import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../api";


function FullCalendarApp(props) {

    const [alarms, setAlarms] = useState([]);
    console.log(alarms);

    useEffect(() => {
        axios.get(API_URL+`get_user_alarms/${props.user_id}/`)
            .then(response => {
                setAlarms(response.data.alarms)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div className="App">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridDay"
                headerToolbar={{
                    center: 'timeGridWeek,timeGridDay',
                }}
                events={alarms}
                eventColor="info"
                nowIndicator="danger"
            />
        </div>
    );
}

export default FullCalendarApp;
