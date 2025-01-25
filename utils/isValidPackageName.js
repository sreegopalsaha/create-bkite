export const isValidPackageName = (input) => {
  const npmPackageNameRegex =
    /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

  if (!input.trim()) return "Package name cannot be empty.";

  if (!npmPackageNameRegex.test(input))
    return "Invalid package name. Follow npm naming rules.";
  return true;
};
