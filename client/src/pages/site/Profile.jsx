import React, { useEffect, useState } from "react";
import "../style/Profile.css";
import { useSelector } from "react-redux";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/UserRequest";

const Profile = () => {
  const { id } = useParams;
  const [data, setData] = useState(null);

  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getUser();
      setData(data);
    };

    fetchPersons();
  }, [id]);

  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
};

export default Profile;
