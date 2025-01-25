#!/usr/bin/env node
import prompts from "prompts";
import path from "path";
import { sanitizeProjectName } from "../utils/sanitizeProjectName.js";
import { createDirectory } from "../utils/createDirectory.js";
import { createFile } from "../utils/createFile.js";
import * as templates from "../templates/index.js";
import { isValidPackageName } from "../utils/isValidPackageName.js";

const args = process.argv.slice(2);
const currentDir = process.cwd();

const promptProjectName = async () => {
  const res = await prompts({
    type: "text",
    name: "projectName",
    message: "Project name:",
    initial: "bkite-project",
    validate: (input) => input.trim() !== "" || "Project name cannot be empty.",
  });
  const sanitizedProjectName = sanitizeProjectName(res.projectName);
  return sanitizedProjectName;
}

const promptPackageName = async (initialValue) => {
  const res = await prompts({
    type: "text",
    name: "packageName",
    message: "Enter your package name:",
    initial: initialValue,
    validate: (input) => isValidPackageName(input)
  })
  
    return res.packageName;
};

const startProject = async (projectName, packageName, projectDir) => {
  const structure = [
      { type: "dir", path: "src/configs" },
      { type: "dir", path: "src/controllers" },
      { type: "dir", path: "src/middlewares" },
      { type: "dir", path: "src/models" },
      { type: "dir", path: "src/routes" },
      { type: "dir", path: "src/utils" },
      {
          type: "file",
          path: "package.json",
          content: templates.packageTemplate(packageName),
      },
      {
          type: "file",
          path: "README.md",
          content: templates.readmeTemplate(projectName),
      },
      { type: "file", path: ".gitignore", content: "node_modules\n.env" },
      { type: "file", path: ".env", content: templates.envTemplate(projectName) },
      {
          type: "file",
          path: "src/app.js",
          content: templates.appTemplate(projectName),
      },
      { type: "file", path: "src/index.js", content: templates.indexTemplate() },
      {
          type: "file",
          path: "src/constants.js",
          content: templates.constantsTemplate(projectName),
      },
      {
          type: "file",
          path: "src/configs/db.config.js",
          content: templates.dbConfigTemplate(),
      },
      {
          type: "file",
          path: "src/controllers/example.controller.js",
          content: templates.controllerTemplate(),
      },
      {
          type: "file",
          path: "src/routes/example.routes.js",
          content: templates.routesTemplate(),
      },
      {
          type: "file",
          path: "src/utils/ApiResponse.js",
          content: templates.ApiResponseTemplate(),
      },
      {
          type: "file",
          path: "src/utils/ApiError.js",
          content: templates.ApiErrorTemplate(),
      },
      {
          type: "file",
          path: "src/middlewares/globalErrorHandler.js",
          content: templates.globalErrorHandlerTemplate(),
      },
      {
          type: "file",
          path: "src/utils/asyncHandler.js",
          content: templates.asyncHandlerTemplate(),
      },
  ];

  structure.forEach((item) => {
      const fullPath = path.join(projectDir, item.path);
      if (item.type === "dir") {
          createDirectory(fullPath);
      } else if (item.type === "file") {
          createFile(fullPath, item.content);
      }
  });

  console.log("\nProject setup complete!");
  console.log(`\nNext steps:`);

if (currentDir !== projectDir) {
  console.log(`  1. Navigate to the project directory:`);
  console.log(`     cd ${projectName}`);
}
  console.log(`  2. Install dependencies:`);
  console.log(`     npm install`);
  console.log(`  3. Start the project:`);
  console.log(`     npm run start`);
  console.log(`\nHappy coding! 🎉`);
};

if(args.length === 0){
  const projectName = await promptProjectName();
  const packageName = await promptPackageName(projectName);
  const projectDir = path.join(currentDir, projectName);
  startProject(projectName, packageName, projectDir);

}

if(args[0] === ".") {
  const projectDir = currentDir;
  const projectName = sanitizeProjectName(path.basename(currentDir));
  const packageName = await promptPackageName(projectName);
  startProject(projectName, packageName, projectDir);
}

if(args[0] && !(args[0] === ".")){
  let packageName;
  const projectName = sanitizeProjectName(args[0]);
  if(!isValidPackageName(projectName)){
    packageName = await promptPackageName();
  }else{
    packageName = projectName;
  }
  const projectDir = path.join(currentDir, projectName);
  startProject(projectName, packageName, projectDir);
}