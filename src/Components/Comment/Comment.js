import React from "react";

const Comment = ({ comment }) => {
  // console.log(comment);
  return (
    <div className="pb-2">
      <div className="card p-2">
        <p className="ps-2 my-0 py-0 text-success">{comment.name}</p>
        <p>
          <small className="ps-2 my-0 py-0  text-danger">
            <b>Email:</b> {comment.email}
          </small>
        </p>
        <p className="ps-2 ">{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
