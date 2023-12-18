"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routes(app) {
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
    app.post("/users", (req, res) => {
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
    app.get("/user/:id", (req, res) => {
        res.sendStatus(200);
    });
}
exports.default = routes;
