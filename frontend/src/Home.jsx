import { useState } from "react";
import TodoForm from "./components/Todoform";
import TodoList from "./components/TodoList";
import SearchTodo from "./components/SearchTodo";
import "./App.css";
function Home() {
  const [refresh, setRefresh] = useState(false);

  return (
     <div className="container">
      <h1>Todo App</h1>

      <TodoForm refresh={() => setRefresh(!refresh)} />

      <SearchTodo />

      <TodoList refresh={refresh} />
    </div>
  );
}

export default Home;
