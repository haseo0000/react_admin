import "./WidgetSmall-styled.css";
import { Visibility } from "@mui/icons-material";
import { newJoinMembers } from "../../data";

function WidgetSmall() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Join Members</span>

      <ul className="widgetSmallList">
        {newJoinMembers.map((item) => (
          <li className="widgetSmallListItem" key={item.userName}>
            <img src={item.img} alt="" className="widgetSmallImage" />
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">{item.userName}</span>
              <span className="widgetSmallUserTitle">{item.userTitle}</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSmall;
