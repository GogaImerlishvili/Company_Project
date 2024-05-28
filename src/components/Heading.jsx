import React from "react";

const Heading = ({ className, title }) => {
  return (
    <div className={`${className} text-center  mx-auto mb-12 lg:mb-5 md:mt-5`}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
