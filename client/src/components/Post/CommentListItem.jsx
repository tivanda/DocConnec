import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../actions/postAction";

const CommentListItem = ({ comment, postId }) => {
  const dispatch = useDispatch();

  function onDelete() {
    dispatch(deleteComment(postId, comment.id));
  }

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        marginBottom: 16,
      }}
    >
      <img
        src={`http://localhost:5000/images/${comment.userImage}`}
        alt="User profile"
        style={{ width: 35, height: 35, borderRadius: "50%" }}
      />
      <div>
        <h6 style={{ margin: 0 }}>{comment.createdBy}</h6>
        <p style={{ margin: 0, textAlign: "start" }}>{comment.text}</p>
      </div>
      <button className="xbtn" onClick={onDelete}>
        x
      </button>
    </div>
  );
};

export default CommentListItem;
