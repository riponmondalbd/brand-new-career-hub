import PropTypes from "prop-types";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const DetailsAppliedJobs = ({ jobs }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = jobs;
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between border p-[30px] rounded-lg mb-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="border rounded-lg h-48 w-52 p-5 flex items-center bg-[#F4F4F4]">
            <img className="h-14" src={logo} alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#474747] mt-8 mb-2">
              {job_title}
            </h2>
            <p className="text-xl font-semibold text-[#757575]">
              {company_name}
            </p>
            <div className="flex gap-4 py-4">
              <button className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-base font-extrabold border rounded-lg border-[#7E90FE] py-[9px] px-[19px]">
                {remote_or_onsite}
              </button>
              <button className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-base font-extrabold border rounded-lg border-[#7E90FE] py-[9px] px-[19px]">
                {job_type}
              </button>
            </div>
            <div className="text-xl text-[#757575] font-semibold lg:flex gap-6 ">
              <div className="flex items-center gap-2 mb-4 lg:mb-0">
                <CiLocationOn />
                {location}
              </div>
              <div className="flex items-center gap-2">
                <CiDollar />
                {salary}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/statistics/${id}`}>
            <button className="text-xl font-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-[11px] px-[18px] rounded-[4px] mt-8">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

DetailsAppliedJobs.propTypes = {
  jobs: PropTypes.shape({
    id: PropTypes.node,
    logo: PropTypes.node,
    job_title: PropTypes.node,
    company_name: PropTypes.node,
    remote_or_onsite: PropTypes.node,
    job_type: PropTypes.node,
    location: PropTypes.node,
    salary: PropTypes.node,
  }),
};

export default DetailsAppliedJobs;
