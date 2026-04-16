const express=require("express");
const validate = require("./middleware/validate");

const router=express.Router();

const {
  createTodo,
  getTodos,
  updateTodo,
  getById,
  deleteTodo,
  insertMany,
} = require("./controller");
 router.get("/",getTodos);
 router.post("/",validate,createTodo);
 router.put("/:id",updateTodo);
 
 router.delete("/:id",deleteTodo);
router.post("/bulk", insertMany)
router.get("/:id",getById);
 module.exports=router;