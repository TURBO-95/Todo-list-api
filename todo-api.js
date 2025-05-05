const express = require("express");
const express = require("mongoose");
const Todo = require(".models/todo");
const app = express();
app.use(express.jaon());

//mongoDB
mongoose.connect("mongodb://mongo:27017/todos",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

// create a task
app.post("/todos", async (req, res) => {
    try {
        const todo = new Todo({
            task: req.body.task
        });
        const savedTodo = await todo.save();
        res.status(201).jason(savedTodo);
    }catch(error){
        res.status(400).jason({error: error.message});
    }
});

// get all tasks
app.get("/todos", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).jason(todos);
    }catch(error){
        res.status(500).jason({error: error.message});
    }
});

// update a task
app.put("/todos", async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {now: true}
        );
        res.status(200).jason(todo);
    }catch(error){
        res.status(404).jason({error: "Todo not found"});
    }
});

// delete a task
app.delete("/todos", async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(204).jason({message: "Todo deleted successfully"});
    }catch(error){
        res.status(404).jason({error: "Todo not found"});
    }
});

// start the server
app.listen(3000,() => {
    console.log(`Server is running on port ${PORT}`);
});
