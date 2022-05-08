import { rest } from "./rest";
import { session } from "../app/types/type";

const getSession = async (): Promise<session | undefined> => {
  const url = "/sessionD";
  try {
    const { data } = await rest.get<session>(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getSession };
