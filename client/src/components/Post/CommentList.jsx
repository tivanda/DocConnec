import React from "react";
import AddNewComment from "./AddNewComment";
import CommentListItem from "./CommentListItem";

const CommentList = ({ list, postId, userId }) => {
  return (
    <div>
      {list.map((item) => {
        return <CommentListItem key={item.id} postId={postId} comment={item} />;
      })}

      <AddNewComment postId={postId} userId={userId} />
    </div>
  );
};

export default CommentList;
