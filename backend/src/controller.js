const Todo = require("./Models/Todo");

exports.createTodo=async (req,res)=>{
    try{
        const todo=await Todo.create(req.body);
        res.status(201).json(todo);
    }
    catch(err){
        res.status(500).json({massage: err.massage});
    }

}
exports.insertMany=async (req,res)=>{
    try{
        if(!Array.isArray(req.body)){
            return res.status(400).json({
                message:" No array"
            });
        }

        const insert=Todo.insertMany(req.body);
         res.status(201).json({
      message: "Todos inserted successfully",
     
    });

    }
    catch(e){ res.status(500).json({
      message: e.message
    });

    }
   
};

exports.getTodos= async (req,res)=>{
    try{
        const todos=await Todo.find();
        res.json(todos);

    }
    catch(e){
        res.status(500).json({massage: e.message});
    }
}

exports.updateTodo= async (req,res)=>{
    try{
        const updatedTodo=await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json(updatedTodo);
    }
    catch(e){
           res.status(500).json({ message: e.message });
    }
}
exports.deleteTodo= async (req, res)=>{
    try{
         await Todo.findByIdAndDelete(req.params.id);
         res.json({message:"Deleted"});
    }
       catch(e){
        res.status(404).json({
            message:e.message
        })
        
    }
}

exports.getById=async (req,res)=>{  
      try{
        const Todos=await Todo.findById(req.params.id);
    
        if(!Todos){
            return res.status(404).json({message:"No Id found"});
        }
        res.status(200).json(Todos);
    }
   catch (error) {
    res.status(400).json({ message: "Invalid ID format" });
  }
}