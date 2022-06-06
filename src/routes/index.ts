import { Router } from "express";
import glob from 'glob';
import logger from "../utils/logger";

export function registerRoutes(router: Router){
    const routes = glob.sync(__dirname + '/**/*.route.ts');
    routes.map(route => {
        register(route, router)
    });
}

function register(routePath: string, app: Router){
    const route = require(routePath);
    route.register(app);
}