import express from 'express';
import userController from '../controllers/user-controller.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

export default class UserRouter {
    constructor() {
        router.get('/', userController.getAll);
        router.get('/:id',  userController.getById);
        router.post('/',  userController.create);
        router.put('/:id',  userController.update);
        router.delete('/:id', userController.delete);
        router.post('/login', userController.login);
        router.post('/register', userController.register);
    }

    getRouter() {
        return router;
    }
}

