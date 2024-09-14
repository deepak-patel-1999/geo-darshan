// src/Components/GalleryModal.js
import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { serverUrl } from "../../utils/apiHandler";

const GalleryModal = ({ show, handleClose, item, onSave }) => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (item) {
      setName(item.name);
      setPlace(item.place);
      setImage(item.image || null);
      setImagePreview(item.image ? `${serverUrl}/uploads/${item.image}` : null);
    } else {
      setName("");
      setPlace("");
      setImage(null);
      setImagePreview(null);
    }
  }, [item]);

  useEffect(() => {
    if (!show) {
      setName("");
      setPlace("");
      setImage(null);
      setImagePreview(null);
    }
  }, [show]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("place", place);
    if (image) {
      formData.append("image", image);
    }

    onSave(
      item
        ? { ...item, name, place, image: image ? image.name : "" }
        : { name, place, image: image ? image.name : "" },
      formData
    );
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {item ? "Edit Gallery Item" : "Add Gallery Item"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPlace">
            <Form.Label>Place</Form.Label>
            <Form.Control
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </Form.Group>
          {imagePreview && (
            <div className="mb-3">
              <Form.Label>Image Preview</Form.Label>
              <Image src={imagePreview} alt="Selected Image" fluid thumbnail />
            </div>
          )}
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default GalleryModal;
