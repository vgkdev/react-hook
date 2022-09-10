import React from "react";
import useFetch from "../custom/fetch";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";

const Blog = () => {
  let history = useHistory();
  const {
    data: dataBlogs,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts", false);

  let newData = [];

  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 10);
    console.log("check newData: ", newData);
  }

  const handleAddNew = () => {
    history.push("/add-new-blog");
  }; // or use Link - react router dom

  return (
    <>
      <div>
        <button onClick={handleAddNew} className="btn-add-new-blog">
          + Add new blog
        </button>
      </div>
      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">{item.title}</div>
                <div className="content">{item.body}</div>
                <button>
                  <Link to={`/blog/${item.id}`}>View detail</Link>
                </button>
              </div>
            );
          })}

        {isLoading === true && (
          <div style={{ textAlign: "center", width: "100%" }}>Loading...</div>
        )}
      </div>
    </>
  );
};

export default Blog;
