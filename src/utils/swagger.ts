import {Express, Request, Response} from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import {version} from '../../package.json'
import apiRoutes from '../routes/routes'

//import log from './logger'

const options: swaggerJsdoc.Options = {
	definition: {
	  openapi: "3.0.0",
	  info: {
		title: "YooFoo API Documentation",
		version,
	  },
	  components: {
		securitySchemes: {
		  bearerAuth: {
			type: "http",
			scheme: "bearer",
			bearerFormat: "JWT",
		  },
		  ApiKeyAuth: {
			type: "apiKey",
			in: "header",
			name: "X-API-Key"
		  }
		},
	  },
	  security: [
		{
		  bearerAuth: [],
		  ApiKeyAuth: [],
		},
	  ],
	},
	apis: ["./src/routes/*.ts"],
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