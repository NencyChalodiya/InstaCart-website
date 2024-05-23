import React from "react";

const StoreFrontDetails = ({
  category,
  handleSubCatClick,
  selectedSubCategory,
  catItems,
  handleSubProductClick,
}) => {
  return (
    <>
      <>
        <li
          key={category.category_id}
          onClick={() => handleSubCatClick(category.category_id)}
          className={`${
            selectedSubCategory === category.category_id
              ? "bg-[#242529] text-white"
              : "bg-white hover:bg-gray-100 text-gray-700"
          } px-3 py-2 cursor-pointer rounded-lg`}
        >
          <h2 className="text-base leading-5 font-medium">
            {" "}
            {category?.category_name}
          </h2>
        </li>
        <div>
          {selectedSubCategory === category.category_id && (
            <ul>
              {catItems.map((subCategory) => (
                <li
                  key={subCategory?.subcategory_id}
                  onClick={() =>
                    handleSubProductClick(subCategory?.subcategory_id)
                  }
                  className="bg-white hover:bg-gray-100 text-gray-700 px-6 py-2 cursor-pointer rounded-lg "
                >
                  <h3 className="text-sm leading-5">
                    {" "}
                    {subCategory?.subcategory_name}
                  </h3>
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    </>
  );
};

export default StoreFrontDetails;
