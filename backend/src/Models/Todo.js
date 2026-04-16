const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        poetry:{
            type:String,
            required: true, 
        },
        poet:{
            type: String,
            required: true,
        },



    },  { timestamps: true }
);

module.exports=mongoose.model("Todo",todoSchema);