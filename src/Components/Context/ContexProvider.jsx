import React, { useState } from 'react';
import { AppContext } from './CreateContext';

const ContexProvider = ({ children }) => {

    const [loader, setLoader] = useState(true);
    const [appointment, setAppointment] = useState([]);

    const handleAppointmentOfDoctors = (doctors) => {
        setAppointment((prev) => [...prev, doctors])
    }

    const userInfo = {
        name: "Context API",
        error: 404,
        handleAppointmentOfDoctors,
        loader,
        setLoader,
        appointment,
        setAppointment,
    }

    return (
        <AppContext value={userInfo}>
            {children}
        </AppContext>
    );
};

export default ContexProvider;