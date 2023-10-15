
import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = ({jobs}) => {

    // const [jobs, setJobs] = useState([]);
    const [length, setLength] = useState(4);

    // useEffect(() => {
    //     fetch('/jobs.json')
    //         .then(res => res.json())
    //         .then(data => setJobs(data));
    // }, [])

    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl font-bold ">Featured Jobs: {jobs.length}</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className="grid grid-cols-2 gap-7">

                    {

                        jobs.slice(0, length).map(job => <Job key={job.id} job={job}></Job> )
                    }

                </div>

                <div className={length === jobs.length ? 'hidden' : ''}>
                <button onClick={()=>setLength(jobs.length)} className="btn btn-primary">Show All</button>
                </div>


            </div>

        </div>
    );
};

export default FeaturedJobs;