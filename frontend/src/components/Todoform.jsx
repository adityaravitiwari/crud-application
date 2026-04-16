import { useState } from "react";
import { createTodo } from "../api/todoApi";

function TodoForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [poetry, setPoetry] = useState("");
  const [poet, setPoet] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!title.trim() || !poetry.trim() || !poet.trim()) {
    alert("Please fill all required fields!");
    return;
  }
    await createTodo({ title, poetry, poet });
    setTitle("");
    setPoetry("");
    setPoet("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title*"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Poetry*"
        value={poetry}
        onChange={(e) => setPoetry(e.target.value)}
      />
    
      <input
        placeholder="Poet*"
        value={poet}
        onChange={(e) => setPoet(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
