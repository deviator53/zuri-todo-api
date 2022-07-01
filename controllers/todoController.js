const {Todo} = require("../models/Todo");
const mongoose = require("mongoose");

// Get All Todos
exports.getTodos = async (req, res) => {
 try{
    const todos = await Todo.find({}).sort({createdAt: -1})

    res.status(200).json(todos);
 }
 catch (err) {
    res.status(500).json({message: err.message});
 }
}
// Create Todos
exports.createTodo = async (req, res) => {
    try{
       const {title, description} = await req.body;
       const todo = await Todo.create({title,description})
       res.status(201).json(todo);
    }
    catch (err) {
       res.status(500).json({message: err.message});
    }
   }


//    Update or Edit Todos
exports.updateTodo = async (req, res) => {
    try{
        let id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message: 'No such todo'})
       }
        const todo = await Todo.findOneAndUpdate({_id: id}, {
            ...req.body
        })
        if (!todo){
            return res.status(400).json({message: 'No Such Todo'})
        }
        res.status(200).json(todo)
    }
    catch (err) {
       res.status(500).json({message: err});
    }
   }

//    Delete Todos
exports.deleteTodo = async (req, res) => {
    try{
        let id = req.params.id;
       if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message: 'No such todo'})
       }
       const todo = await Todo.findOneAndDelete({_id: id})
       if (!todo){
        return res.status(400).json({message: 'No Such Todo'})
       }
       res.status(200).json(todo)
    }
    catch (err) {
       res.status(500).json({message: err.message});
    }
   }
