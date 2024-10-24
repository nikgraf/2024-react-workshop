import fs from "node:fs/promises";
import path from "node:path";

export const setName = async (name: string) => {
  const filePath = path.join("./", "data.txt");
  await fs.writeFile(filePath, `${name}`);
};
