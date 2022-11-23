import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Posts/Post";
import Row from "react-bootstrap/Row";

const Home = () => {
  const posts = useLoaderData().slice(0, 20);

  return (
    <div className="container my-4">
      <Row xs={1} md={3} className="g-4">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </Row>
    </div>
  );
};

export default Home;
