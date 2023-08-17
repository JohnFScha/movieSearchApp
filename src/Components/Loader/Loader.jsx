import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <section className="min-h-screen flex justify-center-center items-center">
      <div className="spinner-container m-auto">
        <Oval
          height={100}
          width={100}
          color="#111"
          wrapperStyle={{}}
          wrapperClass="spinner-container"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#000"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    </section>
  );
};

export default Loader;
