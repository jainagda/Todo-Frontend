import React, { useState, useEffect } from "react";

export default function TodoForm({ addTodo, editingTodo, updateTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description || "");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTodo) {
      updateTodo(editingTodo.id, { title, description });
    } else {
      addTodo(title, description);
    }
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", marginRight: "8px" }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "8px", marginRight: "8px" }}
      />
      <button type="submit">{editingTodo ? "Update" : "Add"}</button>
    </form>
  );
}
