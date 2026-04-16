import { useEffect, useState } from "react";
import { getTodos, deleteTodo, updateTodo } from "../api/todoApi";

function TodoList({ refresh }) {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data || []);
  };

  useEffect(() => {
    fetchTodos();
  }, [refresh]);

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleUpdateClick = (todo) => {
    setEditId(todo._id);
    setEditTitle(todo.title);
  };

 const handleSave = async (id) => {
  if (!editTitle.trim()) return;

  try {
    const res = await updateTodo(id, { title: editTitle });

    // ✅ Update state directly
    setTodos((prev) =>
      prev.map((todo) =>
        todo._id === id ? res.data : todo
      )
    );

    setEditId(null);
    setEditTitle("");
  } catch (error) {
    console.error("Update failed:", error);
  }
};


  return (
    <div>
      <h2>All Todos</h2>

      {todos.map((todo) => (
        <div key={todo._id} className="todo-card">
             <h1><b>ID:</b> {todo._id}</h1> 
          
          {editId === todo._id ? (
            <>
              {/* WHITE INPUT BOX */}
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

              <button onClick={() => handleSave(todo._id)}>
                Save
              </button>

              <button onClick={() => setEditId(null)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <h2>Title= {` [${todo.title}]`}</h2>
              <h2> Poetry={` [${todo.poetry}]`}</h2>
              <h2>Poet ={` [${todo.poet}]`}</h2>

              <button onClick={() => handleUpdateClick(todo)}>
                Update
              </button>

              <button onClick={() => handleDelete(todo._id)}>
                Delete
              </button>
            </>
          )}

        </div>
      ))}
    </div>
  );
}

export default TodoList;
