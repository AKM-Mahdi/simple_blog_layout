import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const SinglePage = () => {
  const data = useLoaderData();
  const { id, userId, title, body } = data;
  const [author, setAuthor] = useState({});
  const [authorImg, setAuthorImg] = useState({});
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
  const AuthorImageUrl = `https://jsonplaceholder.typicode.com/photos/${userId}`;
  useEffect(() => {
    fetch(AuthorImageUrl)
      .then((res) => res.json())
      .then((data) => setAuthorImg(data));
  }, []);

  return (
    <div className="container postContent mt-5">
      <div className="mainBlog">
        <h3>{title}</h3>
        <Card.Text>{body}</Card.Text>
      </div>

      <div className="authorInfo  mt-4 border rounded px-3 py-4">
        <h5>Author Info:</h5>
        <span className="authorImg">
          <img
            width={50}
            className="rouneded-circle"
            src={authorImg.thumbnailUrl}
            alt=""
          />
        </span>
        <p className="pt-2 p-0 m-0">{author.name}</p>
        <p className="p-0 m-0">
          <b>Email: </b>
          {author.email}
        </p>
      </div>
      <div className="comments mt-4">
        <h5 className="px-3 py-2">All Comments:</h5>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
