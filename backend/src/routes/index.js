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

module.exports = router;