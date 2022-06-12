import { Express } from 'express';
import LoginUserController from '../../controllers/users/LoginUserController';
import RegisterUserController from '../../controllers/users/RegisterUserController';

export const register = (app: Express) => {
    const registerUserCtrl: RegisterUserController = new RegisterUserController();
    const loginUserCtrl: LoginUserController = new LoginUserController();

    app.post('/api/user', registerUserCtrl.run.bind(registerUserCtrl));
    app.get('/api/user/login', loginUserCtrl.run.bind(registerUserCtrl));
}