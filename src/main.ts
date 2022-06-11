import ExpressServer from "./server/express.server";
import logger from "./utils/logger";
import 'dotenv/config';
import { connectToDb, disconnectFromDB } from "./utils/db";

async function main(){
    try {
        const port =  process.env.PORT || '3000';
        const server = new ExpressServer(port);
        await connectToDb();
        server.listen();
    } catch (err) {
        logger.error(err);
        await disconnectFromDB();
        process.exit(1);
    }
}


main();