import { useState } from "react";
import { getTodoById } from "../api/todoApi";

function SearchTodo() {
  const [id, setId] = useState("");
  const [todo, setTodo] = useState(null);

  const handleSearch = async () => {
    if (!id.trim()) {
      alert("Please enter an ID");
      return;
    }

    try {
      const res = await getTodoById(id);

      if (!res.data) {
        alert("ID not found!");
        setTodo(null);
        return;
      }

      setTodo(res.data);

    } catch (error) {
      alert("ID not found or invalid!");
      setTodo(null);
    }
  };

  const clearSearch = () => {
    setTodo(null);
    setId("");
  };

  return (
    <div className="search-box">
      <input
        placeholder="Enter Todo ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {todo && (
        <div className="todo-card">
          <span onClick={clearSearch} style={{ cursor: "pointer" }}>
            ✖
          </span>

          <h2>Title = [{todo.title}]</h2>
          <h2>Poetry = [{todo.poetry}]</h2>
          <h2>Poet = [{todo.poet}]</h2>
        </div>
      )}
    </div>
  );
}

export default SearchTodo;
