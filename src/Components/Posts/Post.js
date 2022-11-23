import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
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
  console.log(authorImg);
  const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
  useEffect(() => {
    fetch(commentsUrl)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <Link to={`/${id}`}>
      <Col>
        <Card>
          <Card.Body>
            <h5>{title.slice(0, 22)}..</h5>
            <Card.Text>{body.slice(0, 90)}..</Card.Text>
          </Card.Body>

          <Card.Footer>
            <div className="footerInfo d-flex">
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
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Link>
  );
};

export default Post;
