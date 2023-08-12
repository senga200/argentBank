import React from "react";
import "./User.css";

function User() {
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
