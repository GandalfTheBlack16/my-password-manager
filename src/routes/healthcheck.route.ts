import { Express } from 'express';
import HealthCheckController from '../controllers/HealthcheckGetController';

export const register = (app: Express) => {
    const controller: HealthCheckController = new HealthCheckController();
    app.get('/health', controller.run.bind(controller));
}