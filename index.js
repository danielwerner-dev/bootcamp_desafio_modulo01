const express = require('express');
const server = express();

server.use(express.json());

const projects = [];
let totalRequestsNumber = 0;

function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(pjct => pjct.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
}

function totalRequests(req, res, next) {
  totalRequestsNumber++;

  console.log(`Number of requests: ${totalRequestsNumber}`);

  return next();
}

// Chamada do Midleware global, nao pode ser no fim do arquivo
server.use(totalRequests);

// Post new project
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

// List all projects
server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(pjct => pjct.id == id);

  project.title = title;

  return res.json(project);
});

// Tasks
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(pjct => pjct.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(4444);