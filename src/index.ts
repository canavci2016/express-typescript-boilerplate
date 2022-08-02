import {Request, Response} from 'express'
import ExpressLoader from "./loaders/express";
import {connect as mongodbConnection} from 'mongoose';
import ProfileController from "./controllers/profile";
import Env from "./helpers/env";

mongodbConnection(Env.get("MONGODB_HOST")).then(() => console.log("mongodbConnection was successful")).catch(console.log);

const expressApp = new ExpressLoader();
expressApp.app.get('/', (req: Request, res: Response) => res.status(200).send("ddd"));
expressApp.useController("/profile", ProfileController);
expressApp.listen(Number(Env.get("PORT")));