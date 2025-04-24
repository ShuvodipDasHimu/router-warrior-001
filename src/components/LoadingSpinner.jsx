import React from "react";
import { Oval } from "react-loader-spinner";

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center">
    <Oval color="blue" height={80} width={80} />
  </div>
);

export default LoadingSpinner;