#!/usr/bin/env node 
import prompts from "prompts";

const promptProjectName = async()=>{
    const response = await prompts({
        type: "text",
        name: "projectName",
        message: "Enter your project name:",
        initial: "my-backend-app",
        validate: (input) => input.trim() !== "" || "Project name cannot be empty.",
      });
      return response.projectName;
}

const answer = await promptProjectName();
console.log(answer);