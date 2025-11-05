import React from 'react';

const Doctor = ({ doctors }) => {
    const { name, image, education, experience, fees, speciality, workingAt } = doctors
    return (
        <div>
            <div className=" bg-base-100 w-full shadow-sm  rounded-xl">
                <figure>
                    <img className='rounded-xl'
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold  ">
                        {name}
                    </h2>
                    <div className='mt-2 text-lg font-semibold justify-start  flex flex-col items-start  '>
                        <h1>Sepciality: {speciality}   </h1>
                        <h1 >Experience: {experience}  </h1>
                        <h1>Working: {workingAt}  </h1>
                        <h1>Education: {education}  </h1>
                        <h1>Fees: {fees} </h1>
                    </div>
                    <button className='btn btn-primary'>Visit</button>

                </div>
            </div>
        </div>
    );
};

export default Doctor;