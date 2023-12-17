import {Express, Request, Response} from "express"

function routes(app: Express) {
    /**
    * @openapi
    * /user:
    *  post:
    *     tags:
    *     - Healthcheck
    *     description: Responds if the app is up and running
    *     responses:
    *       200:
    *         description: App is up and running
    */
    app.post("/user", (req: Request, res: Response) => {
        res.sendStatus(200);
    });
}

export default routes;
