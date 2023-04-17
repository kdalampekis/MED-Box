import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [
    {
        id: 1,
        title: 'event 1',
        start: '2023-04-18T10:00:00',
/*
        end: '2023-04-18T12:00:00',
*/
    },
    {
        id: 2,
        title: 'event 2',
        start: '2023-04-18T13:00:00',
/*
        end: '2023-04-18T15:00:00',
*/
    },
    { id: 3,
        title: 'event 3',
        start: '2023-04-18T18:00:00',
/*
        end: '2023-04-18T19:00:00',
*/
    },
];

function FullCalendarApp() {
    return (
        <div className="App">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    center: 'timeGridWeek,timeGridDay,new',
                }}
                customButtons={{
                    new: {
                        text: 'new',
                        click: () => console.log('new event'),
                    },
                }}
                events={events}
                eventColor="info"
                nowIndicator="info"
                dateClick={(e) => console.log(e.dateStr)}
                eventClick={(e) => console.log(e.event.id)}
            />
        </div>
    );
}

export default FullCalendarApp;
