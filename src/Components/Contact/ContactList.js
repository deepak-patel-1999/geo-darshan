import React, { useState, useEffect } from "react";
import { Table, Spinner, Alert } from "react-bootstrap";
import { fetchContacts } from "./api/contacts";
// import { fetchContacts } from "../api/contacts"; // Adjust the path as needed

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch contacts when the component is mounted
  useEffect(() => {
    const loadContacts = async () => {
      try {
        const fetchedContacts = await fetchContacts();
        setContacts(fetchedContacts);
      } catch (err) {
        setError("Failed to load contacts");
      } finally {
        setLoading(false);
      }
    };

    loadContacts();
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center">
              No contacts available
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ContactList;
