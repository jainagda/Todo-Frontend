import React from "react";

export default function TodoList({ todos, setEditingTodo, deleteTodo }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos yet.</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "8px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>{todo.title}</h3>
              <p style={{ margin: "5px 0" }}>{todo.description}</p>
              <p>Status: {todo.status}</p>
            </div>
            <div>
              <button onClick={() => setEditingTodo(todo)}>Edit</button>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ marginLeft: "5px" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
