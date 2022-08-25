import React, { useState } from "react";
import {
  Adminhome,
  Adminadd,
  Adminupdateproduct,
  Adminsettings,
  Adminupdateusers,
} from "./";
import AdminAddIcon from "./Photo/AdminAddIcon.png";
import AdminHomeIcon from "./Photo/AdminHomeIcon.png";
import AdminUpdateProductIcon from "./Photo/AdminUpdateProductIcon.png";
import AdminUpdateUserIcon from "./Photo/AdminUpdateUserIcon.png";
import AdminSettingsIcon from "./Photo/AdminSettingsIcon.png";
import "../style/Admin.css";

const Admin = ({
  allProducts,
  setAllProducts,
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
  const [adminHome, setAdminHome] = useState(true);
  const [adminAdd, setAdminAdd] = useState(true);
  const [adminUpdateProduct, setAdminUpdateProduct] = useState(true);
  const [adminSettings, setAdminSettings] = useState(true);
  const [adminUpdateUsers, setAdminUpdateUsers] = useState(true);

  function adminHomeHideFunc() {
    setAdminHome(false);
    setAdminSettings(true);
    setAdminAdd(true);
    setAdminUpdateProduct(true);
    setAdminUpdateUsers(true);
  }

  function adminAddHideFunc() {
    setAdminAdd(false);
    setAdminHome(true);
    setAdminSettings(true);
    setAdminUpdateProduct(true);
    setAdminUpdateUsers(true);
  }

  function adminUpdateProductHideFunc() {
    setAdminUpdateProduct(false);
    setAdminHome(true);
    setAdminSettings(true);
    setAdminAdd(true);
    setAdminUpdateUsers(true);
  }

  function adminSettingsHideFunc() {
    setAdminSettings(false);
    setAdminHome(true);
    setAdminAdd(true);
    setAdminUpdateProduct(true);
    setAdminUpdateUsers(true);
  }

  function adminUpdateUsersHideFunc() {
    setAdminUpdateUsers(false);
    setAdminSettings(true);
    setAdminHome(true);
    setAdminAdd(true);
    setAdminUpdateProduct(true);
  }

  return (
    <div className="adminPage">
      <img src={AdminHomeIcon} id="AdminHomeIcon" onClick={adminHomeHideFunc} />
      <img src={AdminAddIcon} id="AdminAddIcon" onClick={adminAddHideFunc} />
      <img
        src={AdminUpdateProductIcon}
        id="AdminUpdateProductIcon"
        onClick={adminUpdateProductHideFunc}
      />
      <img
        src={AdminSettingsIcon}
        id="AdminSettingsIcon"
        onClick={adminSettingsHideFunc}
      />
      <img
        src={AdminUpdateUserIcon}
        id="AdminUpdateUsersIcon"
        onClick={adminUpdateUsersHideFunc}
      />
      {!adminHome ? <Adminhome /> : null}
      {!adminAdd ? <Adminadd /> : null}
      {!adminUpdateProduct ? (
        <Adminupdateproduct
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
      ) : null}
      {!adminUpdateUsers ? (
        <Adminupdateusers
          allUsers={allUsers}
          setAllUsers={setAllUsers}
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
        />
      ) : null}
      {!adminSettings ? <Adminsettings /> : null}
    </div>
  );
};

export default Admin;
