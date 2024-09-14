import axios from "axios";

export const serverUrl = "http://localhost:8000/api";

const apiHandler = async (url, method = "GET", body = null, headers = {}) => {
  const config = {
    method,
    url: serverUrl + url,
    headers: {
      ...headers,
    },
    data: body,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

export default apiHandler;
