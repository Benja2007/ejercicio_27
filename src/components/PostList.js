import React from "react";
import { Link } from "react-router-dom";

function PostList({ posts }) {
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return <div>No hay posts disponibles.</div>;
  }

  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
