import axios from "axios";
import { BACK_END_URL_BASE } from "../../constant";

const sanitizeUrl = (url: string) => {
  if (url.endsWith("/")) {
    return url.slice(0, url.length - 1);
  }
};

const baseUrl = sanitizeUrl(BACK_END_URL_BASE);
const storageEndpoint = `${baseUrl}/Storage`;

export const createNewStorage = async (name: string): Promise<string> => {
  const response = await axios.post<{ id: string }>(storageEndpoint, {
    name,
  });
  if (response.status === 200) {
    return response.data.id;
  }
  throw new Error(
    `createNewSession failed with http status ${response.status}`,
  );
};

export const getAll;
