export const packageTemplate = (projectName) =>
  JSON.stringify(
    {
      name: projectName.toLowerCase().replace(/ /g, "-"),
      version: "1.0.0",
      type: "module",
      main: "index.js",
      scripts: {
        dev: "nodemon -r dotenv/config --experimental-json-modules src/index.js",
        start:
          "nodemon -r dotenv/config --experimental-json-modules src/index.js",
      },
      dependencies: {
        cors: "^2.8.5",
        dotenv: "^16.0.3",
        express: "^4.18.2",
        mongoose: "^8.9.5",
      },
      devDependencies: {
        nodemon: "^3.1.7",
      },
    },
    null,
    2
  );
