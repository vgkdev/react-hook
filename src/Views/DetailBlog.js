import React from "react";
import { useParams, useHistory } from "react-router-dom";

const DetailBlog = () => {
  let history = useHistory();
  let { id } = useParams();

  const handleBackData = () => {
    history.push("/blog");
  };

  return (
    <>
      <button onClick={handleBackData}>{"<--"} Back</button>
      <div>DetailBlog with id = {id}</div>
    </>
  );
};

export default DetailBlog;
