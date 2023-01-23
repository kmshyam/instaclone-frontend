import React from "react";
import { useNavigate } from "react-router-dom";
import "./newpost.css";

const Newpost = (props) => {
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    await fetch("https://instaclone-backend-56wy.onrender.com/newuserpost", {
      method: "post",
      body: formData,
    })
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        console.log(text);
      });
    props.indicator((value) => {
      return !value;
    });
    navigate("/user");
  }

  return (
    <>
      <form
        onSubmit={submitHandler}
        encType="multipart/form-data"
        className="postform"
      >
        <div className="formheading">
          <h3>Post Form</h3>
        </div>

        <div className="postinputs">
          <div className="input input1">
            <input type="file" name="PostImage" id="postimage" />
          </div>

          <div className="input input2">
            <input
              type="text"
              name="name"
              placeholder="Enter author name"
              id="name"
            />
          </div>

          <div className="input input3">
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              id="location"
            />
          </div>

          <div className="input input4">
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              id="description"
            />
          </div>
        </div>

        <div className="buttons">
          <button className="button">Add Post</button>
        </div>
      </form>
    </>
  );
};
export default Newpost;
