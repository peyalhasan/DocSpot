import React, { useContext } from 'react';
import { AppContext } from './Context/CreateContext';

const Appointment = () => {
    const { appointment } = useContext(AppContext)
    return (
        <div>
            <ul>
                {
                    appointment.map((app) => <li>{app.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Appointment;