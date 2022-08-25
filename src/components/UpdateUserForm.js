import React, { useState } from "react";
import { adminUpdatePerson } from "../api"
import "../style/Updateuserform.css";

const UpdateUserForm = ({
  element,
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
  allUsers,
  setUpdatedAllUsers
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordType, setPasswordType] = useState("password");
  const [adminStr, setAdminStr] = useState('True');
  const [adminBoolean, setAdminBoolean] = useState(true)
  const [activeStr, setActiveStr] = useState('True');
  const [activeBoolean, setActiveBoolean] = useState(true)

  async function handleUserUpdate(event) {
    event.preventDefault();
    try {
      await adminUpdatePerson(element.id, firstName, lastName, username, password, email, activeBoolean, adminBoolean)
      setUpdatedAllUsers(allUsers)
    } catch (error) {
      throw error;
    }
  }

  function showPasswordFunc() {
    setHidePassword(false);
    setPasswordType("text");
  }

  function hidePasswordFunc() {
    setHidePassword(true);
    setPasswordType("password");
  }

  return (
    <>
      <div className="UpdateUsersHeader">Update Users BELOW</div>
      <br></br>
      <br></br>
      <form onSubmit={handleUserUpdate} className="UpdateForm">
        <input
          className="FirstNameInput"
          type="text"
          placeholder="Enter your first name here..."
          name="firstName"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <input
          className="RegisterInput"
          type="text"
          placeholder="Enter your last name here..."
          name="lastName"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <input
          className="RegisterInput"
          type="text"
          placeholder="Enter username here..."
          name="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <input
          id="registerPasswordInput"
          className="RegisterInput"
          type={passwordType}
          placeholder="Enter password here..."
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <input
          className="RegisterInput"
          type="text"
          placeholder="Enter email here..."
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <label>
          Active? {" "} 
          <select
            className="Updateselect"
            name="size"
            id="select-size"
            value={activeStr}
            onChange={(event) => {
                setActiveStr(event.target.value)
                if (activeStr === "False") {
                    setActiveBoolean(true)
                  }
                if (activeStr === "True") {
                    setActiveBoolean(false)
                  }
            }
            }
          >
            <option>True</option>
            <option>False</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          Admin? {" "}
          <select
            className="Updateselect"
            name="size"
            id="select-size"
            value={adminStr}
            onChange={(event) => {
                setAdminStr(event.target.value)
                if (adminStr === "False") {
                    setAdminBoolean(true)
                  }
                if (adminStr === "True") {
                    setAdminBoolean(false)
                  }
            }
            }
          >
            <option>True</option>
            <option>False</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <button type="submit" className="UpdateUsersButton">
          Update Users
        </button>
      </form>
      {hidePassword ? (
        <button
          id="UpdateUserButton"
          className="ShowPasswordButton"
          onClick={showPasswordFunc}
        >
          Show Password
        </button>
      ) : (
        <button
          id="UpdateUserButton"
          className="ShowPasswordButton"
          onClick={hidePasswordFunc}
        >
          Hide Password
        </button>
      )}
    </>
  );
};

export default UpdateUserForm;
