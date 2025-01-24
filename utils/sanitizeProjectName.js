export const sanitizeProjectName = (name) => {
  return name
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-~]/g, "")
    .toLowerCase();
};
