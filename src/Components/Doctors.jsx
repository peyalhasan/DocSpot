import React from 'react';
import { useLoaderData } from 'react-router';
import Doctor from './Doctor';

const Doctors = () => {
    const data = useLoaderData()
    return (
        <div className=' my-4  '>
            <h1 className='text-xl font-bold my-3' >Here are our Expert Doctors</h1>
            <h1 className='text-xl font-bold mb-5' >Total Doctors: {data.length} </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5' >
                {
                    data.map(item => <Doctor doctors={item} key={item.id}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;