import ExpressServer from "./server/express.server";
import logger from "./utils/logger";

function main(){
    try {
        const port =  process.env.PORT || '3000';
        const server = new ExpressServer(port);
        server.listen();
        
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
}


main();