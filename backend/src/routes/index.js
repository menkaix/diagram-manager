const express = require('express');
const router = express.Router();
const diagramController = require('../controllers/diagramController');
const projectController = require('../controllers/projectController');

// Routes pour les Diagrams
router.get('/diagrams', diagramController.getAllDiagrams);
router.post('/diagrams', diagramController.createDiagram);
router.get('/diagrams/:id', diagramController.getDiagramById);
router.put('/diagrams/:id', diagramController.updateDiagram);
router.delete('/diagrams/:id', diagramController.deleteDiagram);

// Routes pour les Projects
router.get('/projects', projectController.getAllProjects);
router.post('/projects', projectController.createProject);
router.get('/projects/:id', projectController.getProjectById);
router.put('/projects/:id', projectController.updateProject);
router.delete('/projects/:id', projectController.deleteProject);

router.get('/', (req, res) => {
    res.send(`
        <h1>API Routes</h1>
        <h2>Diagrams</h2>
        <ul>
            <li>GET /diagrams - Get all diagrams</li>
            <li>POST /diagrams - Create a new diagram</li>
            <li>GET /diagrams/:id - Get a diagram by ID</li>
            <li>PUT /diagrams/:id - Update a diagram by ID</li>
            <li>DELETE /diagrams/:id - Delete a diagram by ID</li>
        </ul>
        <h2>Projects</h2>
        <ul>
            <li>GET /projects - Get all projects</li>
            <li>POST /projects - Create a new project</li>
            <li>GET /projects/:id - Get a project by ID</li>
            <li>PUT /projects/:id - Update a project by ID</li>
            <li>DELETE /projects/:id - Delete a project by ID</li>
        </ul>
    `);
});

module.exports = router;