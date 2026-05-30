import axios from "axios";

const API=axios.create({
     baseURL: "https://crud-application-lntw.onrender.com/api/todos"
});


export const getTodos = () => API.get("/");
export const getTodoById = (id) => API.get(`/${id}`);
export const createTodo = (data) => API.post("/", data);
export const updateTodo = (id, data) => API.put(`/${id}`, data);
export const deleteTodo = (id) => API.delete(`/${id}`);