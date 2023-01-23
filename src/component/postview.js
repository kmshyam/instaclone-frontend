import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderPage from "./heading";
import Newpost from "./newpost";
import Post from "./post";

export default function Postview() {
  const [post, setPost] = useState([]);
  const [indicator, setIndicator] = useState(true);
  useEffect(() => {
    fetch("https://instaclone-backend-56wy.onrender.com/user")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPost(data.userList);
      });
  }, [indicator]);

  return (
    <>
      <HeaderPage />
      <Routes>
        <Route
          path="/"
          element={post.map((param, index) => {
            return <Post key={index} param={param} />;
          })}
        />
        <Route
          path="/newuserpost"
          element={<Newpost indicator={setIndicator} />}
        />
      </Routes>
    </>
  );
}
