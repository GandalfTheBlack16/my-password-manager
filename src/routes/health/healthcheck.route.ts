import { Express } from 'express';
import HealthCheckController from '../../controllers/health/healthcheck.controller';

export const register = (app: Express) => {
    const controller: HealthCheckController = new HealthCheckController();
    app.get('/health', controller.run.bind(controller));
}