import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    securityDefinitions: {
      bearerAuth: {
        type: "apiKey",
        name: "x-auth-token",
        scheme: "bearer",
        in: "header",
      },
    },
  },
  apis: ["./src/server.js", "./src/routes/auth.route.js"],
};

const specs = swaggerJSDoc(options);

export default specs;
