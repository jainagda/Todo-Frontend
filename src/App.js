import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { motion } from "framer-motion";

const API_BASE = "http://localhost:3600";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    setLoading(true);
    const res = await axios.get(`${API_BASE}/todos`);
    setTodos(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title, description) => {
    await axios.post(`${API_BASE}/todos`, { title, description });
    fetchTodos();
  };

  const updateTodo = async (id, data) => {
    await axios.put(`${API_BASE}/todos/${id}`, data);
    setEditingTodo(null);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_BASE}/todos/${id}`);
    fetchTodos();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <motion.h1
        className="text-3xl font-bold text-center mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        ✏️ Stylish Todo App
      </motion.h1>

      <TodoForm
        addTodo={addTodo}
        editingTodo={editingTodo}
        updateTodo={updateTodo}
      />

      {loading ? (
        <div className="text-center text-gray-500 mt-10 animate-pulse">
          Loading your todos...
        </div>
      ) : (
        <TodoList
          todos={todos}
          setEditingTodo={setEditingTodo}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
}
