import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobsFromLocalStorage } from "../utility/localStorage";
import DetailsAppliedJobs from "./DetailsAppliedJobs/DetailsAppliedJobs";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = getJobsFromLocalStorage();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobs.includes(job.id));
      setAppliedJobs(jobApplied);
    }
  }, [jobs]);

  return (
    <div>
      <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
        <h1 className="text-[32px] font-extrabold text-center py-32">
          Applied Jobs
        </h1>
      </div>
      <div className="max-w-7xl mx-auto py-[130px]">
        <div>
          {appliedJobs.map((jobs) => (
            <DetailsAppliedJobs key={jobs.id} jobs={jobs}></DetailsAppliedJobs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
