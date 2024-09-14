import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { serverUrl } from "../../utils/apiHandler";

const TutorialList = ({ tutorials, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Subtitle</th>
          <th>File</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tutorials.map((tutorial) => (
          <tr key={tutorial.id}>
            <td>{tutorial.title}</td>
            <td>{tutorial.subtitle}</td>
            <td>
              <a
                href={`${serverUrl}/uploads/${tutorial.file}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View File
              </a>
            </td>
            <td>
              <Button variant="link" onClick={() => onEdit(tutorial)}>
                <FaEdit />
              </Button>
              <Button
                variant="link"
                onClick={() => onDelete(tutorial._id)}
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

export default TutorialList;
