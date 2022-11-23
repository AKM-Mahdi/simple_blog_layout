import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { createPath, useLoaderData } from "react-router-dom";
import Comment from "../../Comments/Comment";

const SinglePage = () => {
  const data = useLoaderData();
  const { id, userId, title, body } = data;
  const [author, setAuthor] = useState({});
  const [comments, setComments] = useState([]);
  const authorUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  useEffect(() => {
    fetch(authorUrl)
      .then((res) => res.json())
      .then((data) => setAuthor(data));
  }, []);

  const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
  useEffect(() => {
    fetch(commentsUrl)
      .then((res) => res.json())
      .then((data) => setComments(data.filter((item) => item.postId == id)));
  }, []);

  console.log(comments);

  return (
    <div className="postContent">
      <div className="mainBlog">
        <h5>{title}</h5>
        <Card.Text>{body}</Card.Text>
      </div>

      <div className="authorInfo">
        <span className="authorImg">
          <img width={50} className="rouneded-circle" src="" alt="" />
        </span>
        <span>{author.name}</span>
      </div>
      <div className="comments">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
