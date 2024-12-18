const { before, after, beforeEach } = require('mocha');
const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const router = require('../../../src/routes/index');
const { Diagram, Project } = require('../../../src/models/index');

const app = express();
app.use(express.json());
app.use('/api', router);

describe('Integration Tests', () => {
    before(async () => {
        await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
    });

    after(async () => {
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        await Diagram.deleteMany({});
        await Project.deleteMany({});
    });

    describe('GET /api/diagrams', () => {
        it('should get all diagrams', async () => {
            const diagram = new Diagram({ title: 'Test Diagram', content: 'Content', projectId: new mongoose.Types.ObjectId() });
            await diagram.save();

            const res = await request(app).get('/api/diagrams');

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array').that.has.lengthOf(1);
            expect(res.body[0]).to.have.property('title', 'Test Diagram');
        });
    });

    // ...tests pour les autres routes...
});
