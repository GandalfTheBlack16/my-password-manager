import express, { Application, json, Router, Request, Response } from "express";
import httpStatus from "http-status";
import { registerRoutes } from "../routes";
import logger from "../utils/logger";

export default class ExpressServer {
    
    private port: string;
    private app: Application;

    constructor(port: string){
        this.port = port;
        this.app = express();
        const router = Router();
        
        this.app.use(router);
        registerRoutes(router);

        router.use((err: Error, req: Request, res: Response, next: Function) => {
            logger.error(err);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
          }); 
    }

    async listen(): Promise<void> {
        return new Promise(resolve => {
            this.app.listen(this.port, () => {
                logger.info(`Server starter on port ${this.port}`)
                resolve();
            });
        });
    }


}
