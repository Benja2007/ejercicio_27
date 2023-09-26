import React, { useState } from "react";

function CommentForm({ onAddComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      text: comment
    };
    onAddComment(newComment);
    setComment("");
  };

  return (
    <div>
      <h2>Agregar Comentario</h2>
      <form onSubmit={handleSubmit}>
        <label>Comentario:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">Agregar Comentario</button>
      </form>
    </div>
  );
}

export default CommentForm;
