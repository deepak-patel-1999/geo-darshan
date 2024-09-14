// src/api/gallery.js
import apiHandler from "../../../utils/apiHandler";

const API_URL = "/gallery"; // Adjust this to your actual API endpoint

export const fetchGalleryItems = async () => {
  return apiHandler(API_URL);
};

export const addGalleryItem = async (formData) => {
  return apiHandler(API_URL, "POST", formData);
};

export const updateGalleryItem = async (id, formData) => {
  return apiHandler(`${API_URL}/${id}`, "PUT", formData);
};

export const deleteGalleryItem = async (id) => {
  return apiHandler(`${API_URL}/${id}`, "DELETE");
};
