import React from "react";

const PageSelect = ({ range, page, handlePage }) => {
  
  return (
    <div className="flex justify-between mx-5 my-10">
      {range.map((num, idx) => {
        return (
          <button
            key={idx}
            onClick={() => handlePage(num)}
            className={
              page === num
                ? "w-16 p-4 rounded-lg bg-slate-300 text-black"
                : "w-16 p-4 rounded-lg bg-black text-white"
            }
          >
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default PageSelect;
