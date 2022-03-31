import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Sidebar.css";

const RecentItem = ({ topic }) => {
  return (
    <div className="sideBar_recentItem">
      <span className="sideBar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
};

function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
          alt=""
        />
        <Avatar
          className="sidebar_avatar"
          src={user.photoUrl}
          sx={{ width: 56, height: 56 }}
        >
          {user.email.slice(0, 2).toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statsNumber">2000</p>
        </div>

        <div className="sidebar_stat">
          <p>views on post</p>
          <p className="sidebar_statsNumber">2000</p>
        </div>
      </div>

      <div className="sidebar_buttom">
        <p>Recent</p>
        <RecentItem topic="react" />
        <RecentItem topic="research" />
        <RecentItem topic="programming" />
        <RecentItem topic="redux toolkit" />
        <RecentItem topic="react hooks" />
      </div>
    </div>
  );
}

export default Sidebar;
