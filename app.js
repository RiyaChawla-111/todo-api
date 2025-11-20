const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let todos = [
  { id: "1", title: "Buy milk", completed: false },
  { id: "2", title: "Read docs", completed: false }
];

// GET /todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST /todos
app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "title required" });
  const newTodo = { id: uuidv4(), title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  const t = todos.find(x => x.id === req.params.id);
  if (!t) return res.status(404).json({ error: "not found" });
  res.json(t);
});

// PUT /todos/:id
app.put('/todos/:id', (req, res) => {
  const idx = todos.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "not found" });
  const { title, completed } = req.body;
  if (title !== undefined) todos[idx].title = title;
  if (completed !== undefined) todos[idx].completed = completed;
  res.json(todos[idx]);
});

// DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
  const idx = todos.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "not found" });
  todos.splice(idx, 1);
  res.status(204).send();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Tiny TODO API running on http://localhost:${port}`));
