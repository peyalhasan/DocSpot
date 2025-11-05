import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Doctor from './Doctor';

const Doctors = () => {
    const data = useLoaderData();

    const [doctros, setDoctors] = useState(data);

    const searchDocotrs = (e) => {
        e.preventDefault()
        const getSearchValue = e.target.search.value;
        if (getSearchValue) {
            const result = data.filter(d => d.name.toLowerCase().includes(getSearchValue.toLowerCase()))
            setDoctors(result)
        }
        else {
            setDoctors(data)
        }
    }

    return (
        <div className=' my-4  '>
            <h1 className='text-xl font-bold my-3' >Here are our Expert Doctors</h1>
            <h1 className='text-xl font-bold mb-5' >Total Doctors: {data.length} </h1>

            <div className='w-fll mb-10 '>
                <form onSubmit={searchDocotrs} className='flex justify-center items-center gap-2  ' action="">
                    <input type="search" name="search" id="" className='border-2 border-purple-600 w-1/2 rounded-lg h-10 
                    ' />
                    <button className='btn btn-secondary'>Search</button>
                </form>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5' >
                {
                    doctros.map(item => <Doctor doctors={item} key={item.id}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;