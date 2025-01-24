import fs from "fs";

export const createFile = (filePath, content) => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content, "utf8");
    } else {
      console.warn(`File ${filePath} already exists. Skipping...`);
    }
  } catch (error) {
    console.error(`Error creating file ${filePath}: ${error.message}`);
  }
};
