import React from "react";
import "./Post.css";
import { useDispatch } from "react-redux";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import { likePost } from "../../api/PostRequest";
import CommentList from "./CommentList";
import { deletePost } from "../../actions/postAction";

const Post = ({ data, postId }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(data.likes.length);
  const isLiked = likes.length > 0;
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLike = () => {
    likePost(data._id, user._id);
    isLiked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  function onDelete() {
    dispatch(deletePost(postId));
  }

  return (
    <div
      style={{ border: `${data.checked ? "2px solid red" : "none"}` }}
      className="Post"
    >
      {" "}
      <button variant="primary" onClick={onDelete}>
        x
      </button>
      <div className="detail">
        <span>
          <b>
            <img
              className="pic"
              src={
                user.profilePicture
                  ? serverPublic + user.profilePicture
                  : serverPublic + "defaultProfile.png"
              }
              alt="Profile"
            />
            dr. {data.firstname} {data.lastname}
          </b>
        </span>
        <br />
        <br />
        <img
          className="Name"
          src={
            data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""
          }
          alt=""
        />
        <br />
        <br /> <span>{data.desc}</span>
      </div>
      <div className="postReact">
        <img
          src={isLiked ? Heart : NotLike}
          alt=""
          style={{ cursos: "pointer" }}
          onClick={handleLike}
        />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
        <hr />
      </span>
      <CommentList
        list={data.commentList}
        postId={data._id}
        userId={data.userId}
      />
    </div>
  );
};

export default Post;
