import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
    },
    basePath: "/api/v1",
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
  },
  apis: [
    "./src/server.js",
    "./src/routes/auth.route.js",
    "./src/routes/userRoute.js",
  ],
};

const specs = swaggerJSDoc(options);

export default specs;
