import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { category_name, availability, logo } = category;
  return (
    <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] p-10">
      <img
        className="p-4 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-lg"
        src={logo}
        alt=""
      />
      <h3 className="text-xl font-extrabold text-[#474747] mt-8 mb-2">
        {category_name}
      </h3>
      <p className="text-base font-medium text-[#A3A3A3]">{availability}</p>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    category_name: PropTypes.node,
    availability: PropTypes.node,
    logo: PropTypes.node,
  }),
};

export default Category;
