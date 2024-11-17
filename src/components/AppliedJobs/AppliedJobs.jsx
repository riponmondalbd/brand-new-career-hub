import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobsFromLocalStorage } from "../utility/localStorage";
import DetailsAppliedJobs from "./DetailsAppliedJobs/DetailsAppliedJobs";

const AppliedJobs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const storedJobs = getJobsFromLocalStorage();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobs.includes(job.id));
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
    }
  }, [jobs]);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
        <h1 className="text-[32px] font-extrabold text-center py-32">
          Applied Jobs
        </h1>
      </div>
      <div className="max-w-7xl mx-auto py-[130px]">
        <div className="flex justify-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1"
              onClick={toggleDropDown}
            >
              Filter By
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li onClick={() => handleJobsFilter("all")}>
                  <a onClick={closeDropDown}>All</a>
                </li>
                <li onClick={() => handleJobsFilter("remote")}>
                  <a onClick={closeDropDown}>Remote</a>
                </li>
                <li onClick={() => handleJobsFilter("onsite")}>
                  <a onClick={closeDropDown}>Onsite</a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div>
          {displayJobs.map((jobs) => (
            <DetailsAppliedJobs key={jobs.id} jobs={jobs}></DetailsAppliedJobs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
