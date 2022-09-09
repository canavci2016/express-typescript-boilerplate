import { connect as mongodbConnection } from 'mongoose';

type listenFunction = () => void;
type errorFunction = (reason: any) => void;

export default class MongoDbLoader {
    private host: string;
    private onConnectHandler: listenFunction;
    private onErrorHandler: errorFunction;

    constructor(host: string) {
        this.host = host;
        this.onConnectHandler = () => console.log("mongodbConnection was successful");
        this.onErrorHandler = (reason: any) => console.log("mongodbConnection failed");
    }

    public connect() {
        mongodbConnection(this.host).then(this.onConnectHandler).catch(this.onErrorHandler);
    }

    onConnect = (fn: listenFunction): this => {
        this.onConnectHandler = fn;
        return this;
    }

    onError = (fn: errorFunction): this => {
        this.onErrorHandler = fn;
        return this;
    }
}