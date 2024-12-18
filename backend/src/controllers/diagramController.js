const { Diagram } = require('../models/index');

const getAllDiagrams = async (req, res) => {
    try {
        const diagrams = await Diagram.find();
        res.status(200).json(diagrams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createDiagram = async (req, res) => {
    try {
        const diagram = new Diagram(req.body);
        await diagram.save();
        res.status(201).json(diagram);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDiagramById = async (req, res) => {
    try {
        const diagram = await Diagram.findById(req.params.id);
        if (!diagram) {
            return res.status(404).json({ message: 'Diagramme non trouvé' });
        }
        res.status(200).json(diagram);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateDiagram = async (req, res) => {
    try {
        const diagram = await Diagram.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!diagram) {
            return res.status(404).json({ message: 'Diagramme non trouvé' });
        }
        res.status(200).json(diagram);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteDiagram = async (req, res) => {
    try {
        const diagram = await Diagram.findByIdAndDelete(req.params.id);
        if (!diagram) {
            return res.status(404).json({ message: 'Diagramme non trouvé' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllDiagrams,
    createDiagram,
    getDiagramById,
    updateDiagram,
    deleteDiagram,
    // ...other controller functions...
};
