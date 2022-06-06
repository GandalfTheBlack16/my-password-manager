import { Express } from 'express';
import HealthCheckController from '../controllers/healthchek.controller';
import logger from '../utils/logger';

export const register = (app: Express) => {
    const controller: HealthCheckController = new HealthCheckController();
    app.get('/health', controller.run.bind(controller));
}