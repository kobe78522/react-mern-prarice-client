import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth-service";

const ProfileComponent = ({ currentUser, setCurrentUser }) => {
  // let { currentUser, setCurrentUser } = props;
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <div>You must login before getting your profile.</div>
          <p>
            Going to<Link to="/login"> Login </Link>now
          </p>
        </div>
      )}
      {currentUser && (
        <div>
          <h1 style={{ marginBottom: "1.5rem" }}>Profile Page</h1>
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.user.username}</strong>
            </h3>
          </header>
          <p>
            <strong>Token: {currentUser.token}</strong>
          </p>
          <p>
            <strong>ID: {currentUser.user._id}</strong>
          </p>
          <p>
            <strong>email: {currentUser.user.email}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
