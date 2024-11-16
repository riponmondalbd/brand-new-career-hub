import { Link } from "react-router-dom";
import user from "../../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 lg:gap-[70px] px-3 pt-8">
        <div>
          <h1 className="text-6xl md:text-[80px] font-extrabold">
            One Step <br />
            Closer To Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
              Dream Job
            </span>
          </h1>
          <p className="text-lg font-medium mt-6 mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Link>
            <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-xl font-extrabold text-white py-[19px] px-[28px] rounded-lg">
              Get Started
            </button>
          </Link>
        </div>
        <div>
          <img className="w-auto" src={user} alt="user image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
