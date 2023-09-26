import React, { useState } from "react";

function NewPostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content
    };
    onAddPost(newPost);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h1>Crear un Nuevo Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Contenido:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
}

export default NewPostForm;
