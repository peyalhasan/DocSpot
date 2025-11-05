import React from 'react';

const Doctor = ({ doctors }) => {
    console.log(doctors)
    const { name, image, designation, education, experience, fees, registrationNumber, speciality, workingAt } = doctors
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{speciality}</div>
                    </h2>
                    <div>
                        <h1>Experience:  </h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Doctor;