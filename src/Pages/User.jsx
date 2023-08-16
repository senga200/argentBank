import React from "react";
//import { useSelector } from "react-redux";
import "./User.css";

function User() {
  //const user = useSelector((state) => state.auth.user);
  // console.log("user datas", user);
  return (
    <div className="user_container">
      <div className="user_welcome">
        <h1>Welcome back</h1>
        <button>Edit Name</button>
      </div>
      <div className="user_panorama">
        <div className="user_panorama_item">
          <p>test</p>
        </div>
      </div>
    </div>
  );
}

export default User;
