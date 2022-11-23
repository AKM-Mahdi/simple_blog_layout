import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Post = ({ post, handleDeleteBtn }) => {
  const { id, userId, title, body } = post;
  const [author, setAuthor] = useState({});
  const [authorImg, setAuthorImg] = useState({});
  const [comments, setComments] = useState([]);

  const AuthorDetailsurl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  useEffect(() => {
    fetch(AuthorDetailsurl)
      .then((res) => res.json())
      .then((data) => setAuthor(data));
  }, []);
  const AuthorImageUrl = `https://jsonplaceholder.typicode.com/photos/${userId}`;
  useEffect(() => {
    fetch(AuthorImageUrl)
      .then((res) => res.json())
      .then((data) => setAuthorImg(data));
  }, []);

  const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
  useEffect(() => {
    fetch(commentsUrl)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const btnHandler = (id) => {
    handleDeleteBtn(id);
  };

  return (
    <Col>
      <Card>
        <Card.Body>
          <Link to={`/${id}`}>
            <h5>{title.slice(0, 22)}..</h5>
          </Link>

          <Card.Text>{body.slice(0, 90)}..</Card.Text>
        </Card.Body>

        <Card.Footer>
          <div className="footerInfo d-flex align-items-center">
            <div className="left">
              <span className="authorImg">
                <img
                  width={45}
                  className="rouneded-circle"
                  src={authorImg.thumbnailUrl}
                  alt=""
                />
              </span>
            </div>
            <div className="right">
              <p className="ps-2 p-0 m-0">
                <b>{author.name}</b>
              </p>
              <small className="ps-2 p-0 m-0">
                Total Comments: {comments.length}
              </small>
            </div>
            <div className="button ms-5">
              <button
                onClick={() => btnHandler(id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Post;
