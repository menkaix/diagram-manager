const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const { Diagram, Project } = require('../../../src/models/index');
const controller = require('../../../src/controllers/index');

describe('Controller Tests', () => {
    let req, res, sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        req = { params: {}, body: {}, query: {} };
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
            send: sinon.stub()
        };
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('createResource', () => {
        it('should create a new resource', async () => {
            const mockResource = { _id: '1', title: 'Test Diagram' };
            sandbox.stub(Diagram, 'create').resolves(mockResource);

            req.body = mockResource;
            await controller.createResource(req, res);

            expect(res.status.calledWith(201)).to.be.true;
            expect(res.json.calledWith(mockResource)).to.be.true;
        });

        it('should handle errors', async () => {
            const errorMessage = 'Error creating resource';
            sandbox.stub(Diagram, 'create').throws(new Error(errorMessage));

            await controller.createResource(req, res);

            expect(res.status.calledWith(400)).to.be.true;
            expect(res.json.calledWith({ message: errorMessage })).to.be.true;
        });
    });

    // Tests pour les autres fonctions du contrôleur
    describe('getResources', () => {
        it('should get all resources with pagination and sorting', async () => {
            const mockResources = [{ _id: '1', title: 'Test Diagram' }];
            sandbox.stub(Diagram, 'find').returns({
                sort: sinon.stub().returnsThis(),
                skip: sinon.stub().returnsThis(),
                limit: sinon.stub().resolves(mockResources)
            });

            req.query = { page: 1, limit: 10, sortBy: 'createdAt', order: 'asc' };
            await controller.getResources(req, res);

            expect(res.status.calledWith(200)).to.be.true;
            expect(res.json.calledWith(mockResources)).to.be.true;
        });

        it('should handle errors', async () => {
            const errorMessage = 'Error getting resources';
            sandbox.stub(Diagram, 'find').throws(new Error(errorMessage));

            await controller.getResources(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ message: errorMessage })).to.be.true;
        });
    });

    // ...tests pour les autres fonctions du contrôleur...
});
