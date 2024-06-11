import { sleep } from "./sleep";

export const failAsync = async (name: string | null) => {
  await sleep();
  return { error: `${name} exists`, data: null };
};
