"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routes(app) {
    /**
    * @openapi
    * /healthcheck:
    *  get:
    *     tags:
    *     - Healthcheck
    *     description: Responds if the app is up and running
    *     responses:
    *       200:
    *         description: App is up and running
    */
    app.get("/healthcheck", (req, res) => res.sendStatus(200));
}
exports.default = routes;
