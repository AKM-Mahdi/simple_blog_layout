// import { createContext, useEffect, useState } from "react";

// export const PostContext = createContext();

// const PostProvider = ({ children }) => {
//   const [post, setAllPost] = useState([]);
//   useEffect(() => {
//       .then((res) => res.json())
//       .then((data) => setAllPost(data));
//   }, [post]);

//   const loadPost = () => {
//     return post;
//   };

//   const data = {
//     loadPost,
//   };
//   return <PostContext.Provider value={data}>{children}</PostContext.Provider>;
// };

// export default PostProvider;
