// src/Components/Gallery.js
import React, { useState, useEffect } from "react";
import GalleryList from "./GalleryList";
import GalleryModal from "./GalleryModal";
import {
  fetchGalleryItems,
  addGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} from "./api/gallery";
import { Button } from "react-bootstrap";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchGalleryItems();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadItems();
  }, []);

  const handleAdd = () => {
    setSelectedItem(null);
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteGalleryItem(id);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (item, formData) => {
    try {
      if (item && item._id) {
        // Edit existing item
        const updatedItem = await updateGalleryItem(item._id, formData);
        setItems(
          items.map((i) => (i._id === updatedItem._id ? updatedItem : i))
        );
      } else {
        // Add new item
        const newItem = await addGalleryItem(formData);
        setItems([...items, newItem]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>Gallery</h2>
        <Button variant="primary" onClick={handleAdd} className="mb-3">
          + Add Gallery Item
        </Button>
      </div>

      <GalleryList items={items} onEdit={handleEdit} onDelete={handleDelete} />
      <GalleryModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        item={selectedItem}
        onSave={handleSave}
      />
    </div>
  );
};

export default Gallery;
