import { Express } from 'express';
import { body } from 'express-validator';
import LoginUserController from '../../controllers/users/LoginUserController';
import RegisterUserController from '../../controllers/users/RegisterUserController';
import validateInput from '../../middlewares/input-validation.middleware';

export const register = (app: Express) => {
    const registerUserCtrl: RegisterUserController = new RegisterUserController();
    const loginUserCtrl: LoginUserController = new LoginUserController();

    app.post('/api/user', validateInput([ body('email').isEmail(), body('password').isLength({ min: 4 }) ]), registerUserCtrl.run.bind(registerUserCtrl));
    app.get('/api/user/login', validateInput([ body('email').isEmail(), body('password').isLength({ min: 4 }) ]), loginUserCtrl.run.bind(registerUserCtrl));
}