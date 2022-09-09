import ExpressLoader from "../../loaders/express";
import { Request, Response } from 'express'
import ProfileController from "../controllers/profile";

export default function (expressApp: ExpressLoader) {

    expressApp.app.get('/', (req: Request, res: Response) => res.status(200).send("ddd"));
    expressApp.useController("/profile", ProfileController);

}