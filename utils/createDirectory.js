import fs from 'fs';

export const createDirectory = (dirPath) => {
    try {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      } else {
        console.warn(`Directory ${dirPath} already exists. Skipping...`);
      }
    } catch (error) {
      console.error(`Error creating directory ${dirPath}: ${error.message}`);
    }
  };