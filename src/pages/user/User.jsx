import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./User-styled.css";
import {
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  CalendarToday,
  PermIdentity,
  Publish,
} from "@mui/icons-material";
import { userList } from "../../data";

function User() {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const user = userList.find((item) => item.id === Number(userId));
    setUserInfo(user);
    return () => {
      setUserInfo(null);
    };
  }, [userId]);

  if (!userInfo) return;

  return (
    <div className="user-container">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={userInfo.avartar} className="userImage" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{userInfo.username}</span>
              <span className="userShowUserTitle">{userInfo.title}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowDetails">Account Details</span>
            <div className="userDetail">
              <PermIdentity className="userIconDetail" />
              <span className="userInfo">{userInfo.username}</span>
            </div>
            <div className="userDetail">
              <CalendarToday className="userIconDetail" />
              <span className="userInfo">{userInfo.birth}</span>
            </div>
            <span className="userShowDetails">Contact Details</span>
            <div className="userDetail">
              <PhoneAndroid className="userIconDetail" />
              <span className="userInfo">{userInfo.phone}</span>
            </div>
            <div className="userDetail">
              <MailOutline className="userIconDetail" />
              <span className="userInfo">{userInfo.email}</span>
            </div>
            <div className="userDetail">
              <LocationSearching className="userIconDetail" />
              <span className="userInfo">{userInfo.address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <div className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={userInfo.username}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder={userInfo.username}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={userInfo.email}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={userInfo.phone}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={userInfo.address}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src={userInfo.avartar}
                  alt=""
                  className="userUpdateImage"
                />
                <label htmlFor="file">
                  <Publish className="publishIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
