const express = require("express");
const app = express();
const port = 3000;

// a middleware that enables us to read the received JSON data
app.use(express.json());

//Q2
const todos = [
  { todo: " wake up", isCompleted: false },
  { todo: "Eat Breakfast", isCompleted: false },
];

//Q3
app.get("/todos",(req,res)=>{
    // set the response status code to 200 (OK)
res.status(200)
// sends back a response of all todos
res.json(todos)
})

//Q4
app.post("/create/todo",(req,res)=>{
    const newTodo={todo:req.body.todo,isCompleted:req.body.isCompleted}
    todos.push(newTodo)
    // set the response status code  to 201 (Created)
    res.status(201)
    // sends back a json response of the added user
    res.json(newTodo)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
