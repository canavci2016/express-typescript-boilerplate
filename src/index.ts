import ExpressLoader from "./loaders/express";
import MongoDbLoader from "./loaders/mongo";
import Env from "./helpers/env";
import routeIndex from "./api/routes";


const mongoDbLoaderInstance = new MongoDbLoader(Env.get("MONGODB_HOST"));
mongoDbLoaderInstance
    .onConnect(() => console.log("Connected to MongoDB"))
    .onError(err => console.log("Error connecting to MongoDB" + err.message))
    .connect();

//mongodbConnection(Env.get("MONGODB_HOST")).then(() => console.log("mongodbConnection was successful")).catch(console.log);

const expressApp = new ExpressLoader();
routeIndex(expressApp);
expressApp.listen(Number(Env.get("PORT")));
