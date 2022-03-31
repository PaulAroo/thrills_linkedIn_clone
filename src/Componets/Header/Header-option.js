import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick, bool }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_Icon" />}
      {(avatar || bool) && (
        <Avatar className="headerOption_icon" src={avatar}>
          {user?.email.slice(0, 2)}
        </Avatar>
      )}
      <h4 className="headerOption_title">{title}</h4>
    </div>
  );
}

export default HeaderOption;
