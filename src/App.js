import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from "./PostList";
import Post from "./Post";
import NewPostForm from "./NewPostForm";
import { posts as initialPosts } from "./data"; // Importa los datos simulados

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <PostList posts={posts} />
          </Route>
          <Route path="/post/:id">
            <Post posts={posts} />
          </Route>
          <Route path="/new-post">
            <NewPostForm onAddPost={handleAddPost} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
