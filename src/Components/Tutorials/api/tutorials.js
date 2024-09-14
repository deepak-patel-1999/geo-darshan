import apiHandler from "../../../utils/apiHandler";

const API_URL = "/tutorials"; // Adjust this to your actual API endpoint

export const fetchTutorials = async () => {
  return apiHandler(API_URL);
};

export const addTutorial = async (tutorial) => {
  return apiHandler(API_URL, "POST", tutorial, {
    "Content-Type": "multipart/form-data",
  });
};

export const updateTutorial = async (id, tutorial) => {
  return apiHandler(`${API_URL}/${id}`, "PUT", tutorial, {
    "Content-Type": "multipart/form-data",
  });
};

export const deleteTutorial = async (id) => {
  return apiHandler(`${API_URL}/${id}`, "DELETE");
};
