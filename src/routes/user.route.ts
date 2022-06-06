import { Express } from 'express';
import UserPostController from '../controllers/UserPostController';

export const register = (app: Express) => {
    const registerUserCtrl: UserPostController = new UserPostController();
    app.post('/user', registerUserCtrl.run.bind(registerUserCtrl));
}