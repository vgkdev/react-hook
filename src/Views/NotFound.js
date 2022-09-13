import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const handleOnClickButton = () => {
    history.push("/");
  };

  return (
    <div className="not-found-container">
      <h4>This Page Isn't Available</h4>
      <h5>
        The link may be broken, or the page may have been romoved. Chek to see
        if the link you're trying to open is corrent.
      </h5>
      <button className="btn btn-primary" onClick={handleOnClickButton}>
        Go to HomePage
      </button>
    </div>
  );
};

export default NotFound;
