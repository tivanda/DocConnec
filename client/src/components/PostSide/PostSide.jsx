import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";

const Post = ({ showEmergencyOnly = false }) => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts showEmergencyOnly={showEmergencyOnly} />
    </div>
  );
};

export default Post;
