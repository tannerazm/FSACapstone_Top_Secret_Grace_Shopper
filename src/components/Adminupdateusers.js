import React, { useState, useEffect } from "react";
import UpdateUserForm from "./UpdateUserForm";
import "../style/Adminupdateusers.css";
import { adminDeleteUser, getAllUsers } from "../api";
import ProfilePic from "./Photo/ProfileIconAccPage.png";

const Adminupdateusers = ({
  allUsers,
  setAllUsers,
  username,
  setUsername,
  password,
  setPassword,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
}) => {
  const [showUpdateAllUsersForm, setShowUpdateAllUsersForm] = useState(null);
  const [updatedAllUsers, setUpdatedAllUsers] = useState([])

  useEffect(() => {
    async function getTheUsers() {
      try {
        const result = await getAllUsers();
        const users = result.users;
        setAllUsers(users);
      } catch (error) {
        throw error;
      }
    }
    getTheUsers();
  }, [updatedAllUsers]);

  return (
    <div className="AdminUpdateUserContainer">
    <div className="UpdateUserGrid">
      {allUsers.map((element, idx) => {
        return (
          <div className="UpdateUserContainer" key={`UpdateUser ${idx}`}>
            <img className="UpdateUserImage" src={ProfilePic} />
            <div className="UpdateUserInfoContainer">
              <div>
                <b>First Name: </b>
                {element.first_name}
              </div>
              <div>
                <b>Last Name: </b>
                {element.last_name}
              </div>
              <div>
                <b>ID: </b>
                {element.id}
              </div>
              <div>
                <b>Username: </b>
                {element.username}
              </div>
              <div>
                <b>Password: </b>
                {element.password}
              </div>
              <div>
                <b>Email: </b>
                {element.email}
              </div>
              <div>
                    {element.user_active ? (
                      <div className="TextPadding">
                        <b>User Active?</b> True{" "}
                      </div>
                    ) : (
                      <div className="TextPadding">
                        <b>User Active?</b> False{" "}
                      </div>
                    )}
              </div>
              <div>
                    {element.admin_active ? (
                      <div className="TextPadding">
                        <b>Admin Active?</b> True{" "}
                      </div>
                    ) : (
                      <div className="TextPadding">
                        <b>Admin Active?</b> False{" "}
                      </div>
                    )}
              </div>
              <div>
                {showUpdateAllUsersForm != element.id ? (
                  <>
                    <button
                      onClick={() => {
                        setShowUpdateAllUsersForm(element.id);
                      }}
                    >
                      Update Users
                    </button>
                  </>
                ) : (
                  <>
                    <UpdateUserForm
                      element={element}
                      username={username}
                      setUsername={setUsername}
                      password={password}
                      setPassword={setPassword}
                      firstName={firstName}
                      setFirstName={setFirstName}
                      lastName={lastName}
                      setLastName={setLastName}
                      email={email}
                      setEmail={setEmail}
                      allUsers={allUsers}
                      setUpdatedAllUsers={setUpdatedAllUsers}
                    />
                    <button
                      onClick={() => {
                        setShowUpdateAllUsersForm(null);
                      }}
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
              <form onSubmit={async (event) => {
                event.preventDefault();
                await adminDeleteUser(element.id)
                setUpdatedAllUsers(allUsers)
              }}>
                <button className="DeleteUserButton">Delete User</button>
              </form>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Adminupdateusers;
