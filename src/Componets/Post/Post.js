import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "../Feed/InputOption";
import "./Post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{description.slice(0, 2)}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="grey" />
        <InputOption Icon={ChatOutlined} title="Comment" color="grey" />
        <InputOption Icon={ShareOutlined} title="Share" color="grey" />
        <InputOption Icon={SendOutlined} title="Send" color="grey" />
      </div>
    </div>
  );
});

export default Post;
