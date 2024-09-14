// src/Components/BlogList.js
import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const BlogList = ({ blogs, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Subtitle</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog) => (
          <tr key={blog.id}>
            <td>{blog.title}</td>
            <td>{blog.subtitle}</td>
            <td>
              <Button
                variant="primary"
                onClick={() => onEdit(blog)}
                className="me-2"
              >
                <FaEdit />
              </Button>
              <Button variant="danger" onClick={() => onDelete(blog._id)}>
                <FaTrash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BlogList;
