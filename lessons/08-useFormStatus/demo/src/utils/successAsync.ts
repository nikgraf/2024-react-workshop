import { sleep } from "./sleep";

export const successAsync = async (name: string | null) => {
  await sleep();
  return { error: null, data: { id: "1", name } };
};
