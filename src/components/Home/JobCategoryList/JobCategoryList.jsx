import { useEffect, useState } from "react";
import Category from "./Category/Category";

const JobCategoryList = () => {
  const [jobCategory, setJobCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategory(data));
  }, []);

  return (
    <div className="py-[130px] max-w-7xl mx-auto">
      <div>
        <h1 className="text-center text-5xl font-extrabold">
          Job Category List
        </h1>
        <p className="text-center mt-4 mb-8 text-[#757575] text-base font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[25px] rounded-lg">
        {jobCategory.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
