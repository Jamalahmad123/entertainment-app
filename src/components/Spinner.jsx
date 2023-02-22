import React, { useEffect } from "react";

const Spinner = ({ styles = "" }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div className={`grid place-items-center mb-10 ${styles}`}>
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
