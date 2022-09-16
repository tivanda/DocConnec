import React from "react";
import Post from "../../components/Post/Post";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import PostSide from "../../components/PostSide/PostSide";

import "../style/Emergency.css";

const Emergency = () => {
  return (
    <div className="Emergency">
      <RightSide />
      <PostSide showEmergencyOnly={true} />
      <ProfileSide />
    </div>
  );
};

export default Emergency;
