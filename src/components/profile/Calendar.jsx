import * as React from 'react';
import {Appointments, DayView, Scheduler, ViewState} from "@devexpress/dx-react-scheduler";


const currentDate = '2018-11-01';
const schedulerData = [
    { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
    { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

export default function Calendar(){
    return (
        <React.Fragment>
            <Scheduler
                data={schedulerData}
            >
                <ViewState
                    currentDate={currentDate}
                />
                <DayView
                    startDayHour={9}
                    endDayHour={14}
                />
                <Appointments/>
            </Scheduler>
        </React.Fragment>

    );
}