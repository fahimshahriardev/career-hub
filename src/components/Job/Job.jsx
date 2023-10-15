
import { FaMapMarkerAlt,FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
const Job = ({ job }) => {

    const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, phone, email, address } = job;
    return (

        <div>



            <div className="card card-compact h-auto flex flex-row bg-base-100 shadow-xl ">
                <figure className="flex-grow"><img className="w-28 justify-start" src={logo} alt={job_title} /></figure>
                <div className="card-body justify-start flex flex-col">


                    <h2 className="card-title">{job_title}</h2>
                    <h2 className="card-title ">{company_name}</h2>


                    <div className="text-left">
                        <button className="btn btn-primary mr-5">{remote_or_onsite}</button>
                        <button className="btn btn-primary">{job_type}</button>
                    </div>

                    <div className="flex gap-6">
                        <h2 className="flex gap-2 align-middle"><FaMapMarkerAlt className="text-xl"></FaMapMarkerAlt> {location}</h2> 
                        <h2 className="flex gap-2 align-middle"><FaDollarSign className="text-xl" ></FaDollarSign> {salary}</h2> 
                    </div>
                    <div className="card-actions ">

                        <Link to={`job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                        
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Job;