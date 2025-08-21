import React from "react";
import { motion } from "framer-motion";

export default function TodoList({ todos, setEditingTodo, deleteTodo }) {
  return (
    <div className="space-y-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          ✨ No todos yet. Add one to get started!
        </p>
      ) : (
        todos.map((todo, index) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4  bg-white shadow-md rounded-xl flex justify-between items-start hover:shadow-lg transition duration-300"
          style={{border:"1px solid black",margin:"10px",display:"flex", justifyContent:"space-between"}}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
              Title: {todo.title}
              </h3>
              <p className="text-gray-600 text-sm">Description: {todo.description}</p>
              <span
                className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${
                  todo.status === "completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                Status: {todo.status}
              </span>
            </div>
            <div className="flex gap-2" >
              <button
                onClick={() => setEditingTodo(todo)}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                🗑 Delete Button
              </button>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
}
 