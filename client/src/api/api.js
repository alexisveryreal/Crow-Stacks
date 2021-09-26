import axios from "axios";

const API_URL = "http://localhost:1337";

export const createPancakeEntry = async (entry) => {
  try {
    const res = await axios.post(`${API_URL}/api/logs`, { ...entry });
    console.log(res);
    return res;
  } catch (error) {
    throw error;
  }
};
