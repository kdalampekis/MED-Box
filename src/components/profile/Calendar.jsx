/*
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
}*/
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
export default function Calendar(){
    const data = [{
        Id: 1,
        Subject: 'Paris',
        StartTime: new Date(2023, 1, 15, 10, 0),
        EndTime: new Date(2023, 1, 15, 12, 30),
    }];
    const eventSettings = { dataSource: data }

    return <ScheduleComponent height='550px' selectedDate={new Date(2023, 1, 15)} eventSettings={eventSettings}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>;
};
