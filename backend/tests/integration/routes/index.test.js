const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const router = require('../../../src/routes/index');
const { Diagram, Project } = require('../../../src/models/index');
const { expect } = require('chai'); // Ajoutez cette ligne

const app = express();
app.use(express.json());
app.use('/api', router);

const initializeTestData = async () => {
    const project = new Project({ name: 'Test Project', code: 'TP001' });
    await project.save();

    const diagram = new Diagram({ title: 'Test Diagram', content: 'Content', projectId: project._id });
    await diagram.save();
};

describe('Integration Tests', function() {
    before(async function() {
        await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
    });

    after(async function() {
        await mongoose.connection.close();
    });

    beforeEach(async function() {
        await Diagram.deleteMany({});
        await Project.deleteMany({});
        await initializeTestData();
    });

    describe('GET /api/diagrams', function() {
        it('should get all diagrams', async function() {
            const res = await request(app).get('/api/diagrams');

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array').that.has.lengthOf(1);
            expect(res.body[0]).to.have.property('title', 'Test Diagram');
        });
    });

    // ...tests pour les autres routes...
});
