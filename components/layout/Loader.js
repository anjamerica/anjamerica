import React from "react";
import { useContext } from "react";
import { loadingContext } from "../../hooks/loadingContext";

function Loader() {
  const { isLoading } = useContext(loadingContext);
  return (
    <>
      {isLoading && (
        <div className='loader-container z-50'>
        <div className='loader'></div>
      </div>
      )}
    </>
  );
}

export default Loader;
