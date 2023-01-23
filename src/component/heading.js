import React from "react";
import "./heading.css";
import { BsCameraFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function HeaderPage() {
  return (
    <>
      <div className="header">
        <h1 className="heading">
          <AiOutlineFire className="logo" />
          <span className="app-name">Instaclone</span>
        </h1>
        <Link to="/user/newuserpost">
          <BsCameraFill className="camera" />
        </Link>
      </div>
    </>
  );
}
