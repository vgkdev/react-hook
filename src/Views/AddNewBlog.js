import React, { useState } from "react";
import "./AddNewBlog.scss";
import axios from "axios";

const AddNewBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!title) {
      alert("empth title");
      return;
    }
    if (!content) {
      alert("empth content");
      return;
    }

    let data = {
      title: title,
      body: content,
      userId: 1,
    };

    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    if (res && res.data) {
      let newBlog = res.data;
      props.handleAddNew(newBlog);
      console.log("check new blog: ", newBlog);
    }
  };

  return (
    <div className="add-new-container">
      <div className="text-add-new">---Add new blog---</div>

      <div className="inputs-data">
        <label>Title: </label>
        <input
          type={"text"}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="inputs-data">
        <label>Content: </label>
        <input
          type={"text"}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>

      <button className="btn-submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AddNewBlog;
