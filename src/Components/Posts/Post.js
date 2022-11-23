import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, userId, title, body } = post;
  const [author, setAuthor] = useState({});
  const [authorImg, setAuthorImg] = useState({});
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

  return (
    <Link to={`/${id}`}>
      <Col>
        <Card>
          <Card.Header>
            <h5>{title}</h5>
          </Card.Header>
          <Card.Body>
            <Card.Text>{body}</Card.Text>
          </Card.Body>

          <Card.Footer>
            <span className="authorImg">
              <img
                width={50}
                className="rouneded-circle"
                src={authorImg.thumbnailUrl}
                alt=""
              />
            </span>
            <span className="ps-2">{author.name}</span>
          </Card.Footer>
        </Card>
      </Col>
    </Link>
  );
};

export default Post;
