import express from 'express'
import cors from 'cors'

import routes from './routes/routes';

class App {

    public express: express.Application;

    public constructor() {
        this.express = express()

        this.middlewares()
    }

    private middlewares(): void {
        this.express.use(cors())
        this.express.use(express.json())

        this.routes()
    }

    private routes(): void {
        this.express.use(routes)
    }

}

export default new App().express
