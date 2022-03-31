import "./Feed.css";
import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import InputOption from "./InputOption";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import Post from "../Post/Post";
import { db } from "../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Create a Post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageOutlinedIcon} title="Photo" color="#7085F9" />
          <InputOption
            Icon={SubscriptionsOutlinedIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOption
            Icon={EventNoteOutlinedIcon}
            title="Event"
            color="bisque"
          />
          <InputOption
            Icon={ViewDayOutlinedIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
