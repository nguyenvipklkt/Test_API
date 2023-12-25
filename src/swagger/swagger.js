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
      Bearer: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
  },
  apis: ["./src/server.js", "./src/routes/auth.route.js"],
};

const specs = swaggerJSDoc(options);

export default specs;
