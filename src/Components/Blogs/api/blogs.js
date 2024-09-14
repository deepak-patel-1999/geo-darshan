// src/api/blogs.js
import apiHandler from "../../../utils/apiHandler";

const API_URL = "/blogs"; // Adjust this to your actual API endpoint

export const fetchBlogs = async () => {
  return apiHandler(API_URL);
};

export const addBlog = async (blog) => {
  return apiHandler(API_URL, "POST", blog, {
    "Content-Type": "multipart/form-data",
  });
};

export const updateBlog = async (id, blog) => {
  return apiHandler(`${API_URL}/${id}`, "PUT", blog, {
    "Content-Type": "multipart/form-data",
  });
};

export const deleteBlog = async (id) => {
  return apiHandler(`${API_URL}/${id}`, "DELETE");
};
