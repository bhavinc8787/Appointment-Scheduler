import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = ({ isSidebar }) => {
  return (
    <div className={isSidebar ? "flex flex-col gap-4" : "py-12 text-center"}>
      
      {/* Headings always visible */}
      <h2 className={`text-xl font-semibold text-gray-700 ${isSidebar ? "mb-2" : "mb-3 text-center"}`}>
        {isSidebar ? "Medical Specialities" : "Browse by Medical Field"}
      </h2>
      {!isSidebar && (
        <p className="text-sm text-gray-500 mb-6">
          Explore our range of trusted specialists and pick the right doctor for you.
        </p>
      )}

      <div className={isSidebar ? "flex flex-col gap-3" : "flex gap-6 overflow-x-auto justify-center px-4"}>
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className={`flex ${isSidebar ? "flex-row items-center gap-2 text-left" : "flex-col items-center"} text-sm text-gray-600 cursor-pointer hover:translate-y-[-2px] transition-transform`}
          >
            <img
              src={item.image}
              alt={item.speciality}
              className={isSidebar ? "w-10 h-10 object-contain" : "w-16 h-16 mb-2 object-contain"}
            />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
