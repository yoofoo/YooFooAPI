import {Express, Request, Response} from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import {version} from '../../package.json'
//import log from './logger'

const options: swaggerJsdoc.Options = {
    definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app:Express, port:number){
    // Swagger page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Docs in JSON format
    app.get("docs.json", (req:Request, res:Response)=>{
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);

    });
}

export default swaggerDocs;