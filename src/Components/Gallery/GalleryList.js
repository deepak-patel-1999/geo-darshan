// src/Components/GalleryList.js
import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { serverUrl } from "../../utils/apiHandler";

const GalleryList = ({ items, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Place</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.place}</td>
            <td>
              <img
                src={`${serverUrl}/uploads/${item.image}`}
                alt={item.name}
                style={{ width: "100px" }}
              />
            </td>
            <td>
              <Button variant="warning" onClick={() => onEdit(item)}>
                <FaEdit />
              </Button>
              <Button
                variant="danger"
                onClick={() => onDelete(item._id)}
                className="ms-2"
              >
                <FaTrash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default GalleryList;
