import "./Tobbar-styled.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

function Tobbar() {
  return (
    <div className="tobbar">
      <div className="tobbarWrapper">
        <div className="topLeft">
          <span className="logo">admin</span>
        </div>
        <div className="topRight">
          <div className="tobbarIconContainer">
            <NotificationsNone />
            <span className="tobIconBadge">2</span>
          </div>
          <div className="tobbarIconContainer">
            <Language />
            <span className="tobIconBadge">2</span>
          </div>
          <div className="tobbarIconContainer">
            <Settings />
          </div>
          <img
            src={"https://randomuser.me/api/portraits/men/47.jpg"}
            alt="profile"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Tobbar;
