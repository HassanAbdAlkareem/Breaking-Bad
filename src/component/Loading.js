import React from "react";
import spinner from "../img/spinner.gif";

const Loading = () => {
  return (
    <img
      src={spinner}
      style={{ width: "200px", margin: "6rem auto", display: "block" }}
      alt="loading"
    />
  );
};

export default Loading;
