// Ce fichier exporte des fonctions qui gèrent la logique des routes.

const { Diagram } = require('../models/index');
const { Project } = require('../models/index');

// Exemple de fonction pour créer une ressource
exports.createResource = async (req, res) => {
    try {
        const resource = await Diagram.create(req.body);
        res.status(201).json(resource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Exemple de fonction pour lire toutes les ressources avec pagination et tri
exports.getResources = async (req, res) => {
    try {
        const { page = 1, limit = 10, sortBy = 'createdAt', order = 'asc' } = req.query;
        const resources = await Diagram.find()
            .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exemple de fonction pour lire une ressource par ID
exports.getResourceById = async (req, res) => {
    try {
        const resource = await Diagram.findById(req.params.id);
        if (!resource) {
            return res.status(404).json({ message: 'Ressource non trouvée' });
        }
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exemple de fonction pour mettre à jour une ressource
exports.updateResource = async (req, res) => {
    try {
        const resource = await Diagram.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!resource) {
            return res.status(404).json({ message: 'Ressource non trouvée' });
        }
        res.status(200).json(resource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Exemple de fonction pour supprimer une ressource
exports.deleteResource = async (req, res) => {
    try {
        const resource = await Diagram.findByIdAndDelete(req.params.id);
        if (!resource) {
            return res.status(404).json({ message: 'Ressource non trouvée' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Créer un nouveau Project
exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtenir tous les Projects avec pagination et tri
exports.getAllProjects = async (req, res) => {
    try {
        const { page = 1, limit = 10, sortBy = 'createdAt', order = 'asc' } = req.query;
        const projects = await Project.find()
            .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir un Project par ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project non trouvé' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour un Project par ID
exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) {
            return res.status(404).json({ message: 'Project non trouvé' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un Project par ID
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project non trouvé' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};