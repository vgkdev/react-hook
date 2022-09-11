import React, { useEffect, useState } from "react";
import useFetch from "../custom/fetch";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
  const [newData, setNewData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    data: dataBlogs,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts", false);

  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let takeData = dataBlogs.slice(0, 10);
      setNewData(takeData);
    }
  }, [dataBlogs]);

  const handleAddNew = (blog) => {
    let tempData = newData;
    tempData.unshift(blog);
    setShow(false);
    setNewData(tempData);
  };

  const deletePost = (id) => {
    let tempData = newData;
    tempData = tempData.filter((item) => item.id !== id);
    setNewData(tempData);
  };

  return (
    <>
      <Button variant="primary" className="my-3" onClick={handleShow}>
        + Add new blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>

      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">
                  <span>{item.title}</span>
                  <button
                    className="btn-delete"
                    onClick={() => deletePost(item.id)}
                    // () => {} nó sẽ không tham chiếu tới func khi chuyền tham số
                  >
                    x
                  </button>
                </div>
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
