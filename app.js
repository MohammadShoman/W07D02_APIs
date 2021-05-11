const express = require("express");
const app = express();
const port = 3000;

// a middleware that enables us to read the received JSON data
app.use(express.json());

//Q2
const todos = [
  { todo: "wake up", isCompleted: false },
  { todo: "Eat Breakfast", isCompleted: false },
];

//Q3
app.get("/todos", (req, res) => {
  // set the response status code to 200 (OK)
  res.status(200);
  // sends back a response of all todos
  res.json(todos);
});

//Q4
app.post("/create/todo", (req, res) => {
  const newTodo = { todo: req.body.todo, isCompleted: req.body.isCompleted };
  todos.push(newTodo);
  // set the response status code  to 201 (Created)
  res.status(201);
  // sends back a json response of the added user
  res.json(newTodo);
});

//Q5
app.put("/update/todo/:name", (req, res) => {
  const updatedTodo = req.params.name;
  let index;
  let found = todos.find((elem, i) => {
    index = i;
    return elem.todo === updatedTodo;
  });

  if (found) {
    todos[index] = { todo: req.body.todo, isCompleted: req.body.isCompleted };
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.json("not found");
  }
});

//Q6
app.delete("/delete/todo/:name", (req, res) => {
  const name = req.params.name;
  let index;
  let found = todos.find((elem, i) => {
    index = i;
    return elem.todo === name;
  });
  if (found) {
    res.status(200);
    todos.splice(index, 1);

    res.json(found);
  } else {
    res.status(404);
    res.json("not found");
  }
});

//Q7
app.put("/complete/todo/:name", (req, res) => {
  const name = req.params.name;
  let index;
  let found = todos.find((elem, i) => {
    index = i;
    return elem.todo === name;
  });
  if(found){
      res.status(200)
    todos[index] = { todo: name, isCompleted: true };
    res.json(todos[index]);
  }else{
      res.status(404)
      res.json("not found")

  }
});

//Q8
app.get("/completed/todos",(req,res)=>{

res.status(200)
res.json(todos.filter((elem,i)=>{
    return elem.isCompleted===true
}))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
