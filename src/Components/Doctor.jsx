import { useContext } from "react";
import { AppContext } from "./Context/CreateContext";
import { Link } from "react-router";


const Doctor = ({ doctors }) => {
    const { id, name, image, education, experience, fees, speciality, workingAt } = doctors;

    const { handleAppointmentOfDoctors } = useContext(AppContext)

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
                    <button onClick={() => handleAppointmentOfDoctors(doctors)} className='btn btn-primary'>Appointment</button>
                    <Link to={`/doctors/${id}`} >Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;