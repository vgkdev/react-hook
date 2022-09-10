import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../custom/fetch";
import "./DetailBlog.scss";

const DetailBlog = () => {
  let history = useHistory();
  let { id } = useParams();

  const {
    data: dataBlogDetail,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
  console.log("check data blog detail: ", dataBlogDetail);

  const handleBackData = () => {
    history.push("/blog");
  };

  return (
    <>
      <button onClick={handleBackData}>{"<--"} Back</button>
      <h2>Blog ID {id}</h2>
      <div className="blog-detail">
        {isLoading === false && dataBlogDetail && (
          <>
            <div className="title">{dataBlogDetail.title}</div>
            <hr />
            <div className="content">{dataBlogDetail.body}</div>
          </>
        )}

        {isLoading === true && <div>Loading...</div>}
      </div>
    </>
  );
};

export default DetailBlog;
