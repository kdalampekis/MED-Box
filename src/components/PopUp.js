import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { API_URL } from '../api';
import { Howl, Howler } from 'howler';

function PopUp() {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState(null);
    const [alarmId, setAlarmId] = useState(null);
    const [error, setError] = useState(null);
    const soundSrc = process.env.PUBLIC_URL + '/alarm.wav';
    const [alarmTimeFormatted, setAlarmTimeFormatted] = useState('');
    const sound = new Howl({
        src: [soundSrc],
        html5: true
    });

    useEffect(() => {
        const fetchNextUser = async () => {
            try {
                const response = await axios.get(API_URL + 'get_next_user/');
                setUser(response.data);
                setAlarmId(response.data.alarm_id);
                setError(null);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchNextUser();
    }, []);

    useEffect(() => {
        let timerId;

        if (user && user.full_name !== 'No one for today') {
            const now = new Date();
            const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), user.alarm_time.split(':')[0], user.alarm_time.split(':')[1], user.alarm_time.split(':')[2]);

            if (now < alarmTime) {
                timerId = setTimeout(() => {
                    setShow(true);
                    sound.play();
                }, alarmTime.getTime() - now.getTime());
                const alarmTimeFormatted = alarmTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                setAlarmTimeFormatted(alarmTimeFormatted);
            }
        }

        return () => {
            clearTimeout(timerId);
            sound.unload();
        };
    }, [user]);

    const handleClose = () => {
        setShow(false);
        sendTakenData(false);
    };

    const handleOk = () => {
        setShow(false);
        sendTakenData(true);
    };

    const sendTakenData = (taken) => {
        axios.post(API_URL + `take_medication/${alarmId}/`, { taken: taken })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {show && user && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Time to take {user.pill_name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>It's {alarmTimeFormatted}! Time for {user.full_name} to take {user.pill_name}.</Modal.Body>
                    <Modal.Footer>
                        <Button className="btn" outline color="success" onClick={handleOk}>
                            OK
                        </Button>
                        <Button className="btn" outline color="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default PopUp;
