import {Express, Request, Response} from "express"

function routes(app: Express) {
    /**
    * @openapi
    * /users:
    *  post:
    *     tags:
    *     - Healthcheck
    *     description: Responds if the app is up and running
    *     summary: Get a list users.
    *     responses:
    *       200:
    *         description: App is up and running
    */
    app.post("/users", (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    /**
    * @openapi
    * /user/{id}:
    *  get:
    *     tags:
    *     - User
    *     description: Responds if the app is up and running
    *     summary: Get the user indicated by the id. 
    *     parameters:
    *     - name: id
    *       in: path
    *       description: The id of the user to retieve
    *       required: true
    *     responses:
    *       200:
    *         description: App is up and running
    */
    app.get("/user/:id", (req: Request, res: Response) => {
        res.sendStatus(200);
    });
}

export default routes;
