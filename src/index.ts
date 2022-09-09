import ExpressLoader from "./loaders/express";
import { connect as mongodbConnection } from 'mongoose';
import Env from "./helpers/env";
import routeIndex from "./api/routes";

mongodbConnection(Env.get("MONGODB_HOST")).then(() => console.log("mongodbConnection was successful")).catch(console.log);

const expressApp = new ExpressLoader();
routeIndex(expressApp);
expressApp.listen(Number(Env.get("PORT")));