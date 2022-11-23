import React from "react";

const Comment = ({ comment }) => {
  console.log(comment.name);
  return (
    <div>
      <h1>{comment.name}</h1>
    </div>
  );
};

export default Comment;
