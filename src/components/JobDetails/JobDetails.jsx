import { CiDollar, CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idIdx = parseInt(id);

  const job = jobs.find((job) => job.id === idIdx);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  //   console.log(jobs, id, job);
  return (
    <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[32px] font-extrabold text-center py-32">
          Job Details
        </h1>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 ">
            <p className="text-base ">
              <span className="font-extrabold text-[#1A1919]">
                Job Description:
              </span>
              <span className="text-[#757575]">{job_description}</span>
            </p>
            <p className="text-base py-6">
              <span className="font-extrabold text-[#1A1919]">
                Job Responsibility:
              </span>
              <span className="text-[#757575]">{job_responsibility}</span>
            </p>
            <div className="text-base ">
              <p className="font-extrabold text-[#1A1919] mb-4">
                Educational Requirements:
              </p>
              <p className="text-[#757575]">{educational_requirements}</p>
            </div>
            <div className="text-base mt-6">
              <p className="font-extrabold text-[#1A1919] mb-4">Experiences:</p>
              <p className="text-[#757575]">{experiences}</p>
            </div>
          </div>

          <div className="col-span-2 ">
            <div className="border rounded-lg bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] p-[30px]">
              <h2 className="text-xl font-extrabold text-[#1A1919] mb-6">
                Job Details
              </h2>
              <hr />
              <div className="flex items-center gap-2 mt-6 mb-4">
                <CiDollar className="text-2xl text-[#7E90FE]" />
                <p className="text-xl text-[#1A1919]">
                  <span className="font-extrabold">Salary: </span>
                  <span className="font-medium text-[#757575]">
                    {salary} (Per Month)
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2 mb-8">
                <IoCalendarOutline className="text-2xl text-[#7E90FE]" />
                <p className="text-xl text-[#1A1919]">
                  <span className="font-extrabold">Job Title: </span>
                  <span className="font-medium text-[#757575]">
                    {job_title}
                  </span>
                </p>
              </div>
              <h2 className="text-xl font-extrabold text-[#1A1919] mb-6">
                Contact Information
              </h2>
              <hr />
              <div className="flex gap-2 mt-6">
                <IoCallOutline className="text-2xl text-[#7E90FE]" />
                <p className="text-xl text-[#1A1919] mb-4">
                  <span className="font-extrabold">Phone: </span>
                  <span className="font-medium text-[#757575]">
                    {contact_information.phone}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <MdOutlineEmail className="text-2xl text-[#7E90FE]" />
                <p className="text-xl text-[#1A1919]">
                  <span className="font-extrabold">Email: </span>
                  <span className="font-medium text-[#757575]">
                    {contact_information.email}
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CiLocationOn className="text-2xl text-[#7E90FE]" />
                <p className="text-xl text-[#1A1919]">
                  <span className="font-extrabold">Address: </span>
                  <span className="font-medium text-[#757575]">
                    {contact_information.address}
                  </span>
                </p>
              </div>
            </div>
            <Link>
              <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-xl font-extrabold text-white py-[19px]  rounded-lg w-full mt-6 mb-[130px]">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
