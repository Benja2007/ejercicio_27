import React from "react";
import { useParams } from "react-router-dom";

function Post({ posts }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id, 10));

  if (!post) {
    return <div>El post no existe.</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
