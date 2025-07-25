import { useEffect, useState } from "react";
import Job from "./Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-center text-5xl font-extrabold">Featured Jobs</h1>
        <p className="text-center mt-4 mb-8 text-[#757575] text-base font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {jobs.slice(0, showAllJobs).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={showAllJobs === jobs.length ? "hidden" : "text-center"}>
        <button
          onClick={() => setShowAllJobs(jobs.length)}
          className="text-xl font-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-[11px] px-[18px] rounded-[4px]  mb-10 md:mb-32"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
