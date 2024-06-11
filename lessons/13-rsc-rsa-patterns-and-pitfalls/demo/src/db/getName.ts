import fs from "node:fs/promises";
import path from "node:path";

export const getName = async () => {
  const filePath = path.join(__dirname, "data.txt");
  // check if file exists
  try {
    await fs.access(filePath);
    return await fs.readFile(filePath, "utf-8");
  } catch (e) {
    return "No name set yet.";
  }
};
