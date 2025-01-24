#!/usr/bin/env node
import prompts from "prompts";

const sanitizeProjectName = (name) => {
    return name
      .trim()
      .replace(/\s+/g, '-')        
      .replace(/[^a-zA-Z0-9-~]/g, '') 
      .toLowerCase();
  };
  
const promptProjectDetails = async () => {
  const { projectName } = await prompts({
    type: "text",
    name: "projectName",
    message: "Enter your project name:",
    initial: "my-backend-app",
    validate: (input) => input.trim() !== "" || "Project name cannot be empty."
  });

  const sanitizedProjectName = sanitizeProjectName(projectName);

  const { packageName } = await prompts({
    type: "text",
    name: "packageName",
    message: "Enter your package name:",
    initial: sanitizedProjectName,
    validate: (input) => {
      const npmPackageNameRegex = /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
      if (!input.trim()) return "Package name cannot be empty.";
      if (!npmPackageNameRegex.test(input)) return "Invalid package name. Follow npm naming rules.";
      return true;
    },
  });

  return { projectName, packageName };
};

const { projectName, packageName } = await promptProjectDetails();

console.log(projectName, packageName);