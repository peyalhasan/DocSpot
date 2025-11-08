import React from 'react';
import { AppContext } from './CreateContext';

const ContexProvider = ({ children }) => {

    const handleAppointmentOfDoctors = (doctors) => {
        console.log('HI Docotr', doctors)
    }

    const userInfo = {
        name: "Context API",
        error: 404,
        handleAppointmentOfDoctors,
    }

    return (
        <AppContext value={userInfo}>
            {children}
        </AppContext>
    );
};

export default ContexProvider;