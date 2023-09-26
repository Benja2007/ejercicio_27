import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "./PostList";
import Post from "./Post";
import NewPostForm from "./NewPostForm";
import { posts } from "./data"; // Importa los datos simulados

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostList posts={posts} />} />
      <Route path="/post/:id" element={<Post posts={posts} />} />
      <Route path="/new-post" element={<NewPostForm />} />
    </Routes>
  );
}

export default App;
