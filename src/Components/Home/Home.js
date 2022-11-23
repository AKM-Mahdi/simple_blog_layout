import { useLoaderData } from "react-router-dom";
import Post from "../Posts/Post";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setAllPosts] = useState([]);
  const postsData = useLoaderData().slice(0, 20);

  useEffect(() => {
    setAllPosts(postsData);
  }, []);

  const handleDeleteBtn = (id) => {
    const updatedPost = posts.filter((post) => post.id !== id);
    console.log(updatedPost);
    setAllPosts(updatedPost);
  };

  return (
    <div className="container my-4">
      <Row xs={1} lg={3} md={2} className="g-4">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            handleDeleteBtn={handleDeleteBtn}
          ></Post>
        ))}
      </Row>
    </div>
  );
};

export default Home;
