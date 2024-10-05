import apiHandler from "../../../utils/apiHandler";

const API_URL = "/contacts"; // Adjust this to your actual API endpoint

// Fetch all contacts
export const fetchContacts = async () => {
  return apiHandler(API_URL);
};

// Add a new contact
export const addContact = async (contact) => {
  return apiHandler(API_URL, "POST", contact, {
    "Content-Type": "application/json", // Contacts are typically sent as JSON
  });
};

// Update a contact by ID
export const updateContact = async (id, contact) => {
  return apiHandler(`${API_URL}/${id}`, "PUT", contact, {
    "Content-Type": "application/json", // Update contact details as JSON
  });
};

// Delete a contact by ID
export const deleteContact = async (id) => {
  return apiHandler(`${API_URL}/${id}`, "DELETE");
};
