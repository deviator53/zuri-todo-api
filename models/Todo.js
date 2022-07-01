const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }
},{ timestamps: true });

module.exports = {
    Todo: model('Todo', TodoSchema)
}