import React, { useState, useEffect } from "react";
import TutorialList from "./TutorialList";
import TutorialModal from "./TutorialModal";
import { Button } from "react-bootstrap";
import {
  fetchTutorials,
  addTutorial,
  updateTutorial,
  deleteTutorial,
} from "./api/tutorials";

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadTutorials = async () => {
      try {
        const tutorials = await fetchTutorials();
        setTutorials(tutorials);
      } catch (error) {
        console.error(error);
      }
    };

    loadTutorials();
  }, []);

  const handleAdd = () => {
    setSelectedTutorial(null);
    setShowModal(true);
  };

  const handleEdit = (tutorial) => {
    setSelectedTutorial(tutorial);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTutorial(id);
      setTutorials(tutorials.filter((tutorial) => tutorial.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (tutorial) => {
    try {
      if (tutorial.id) {
        // Edit existing tutorial
        const updatedTutorial = await updateTutorial(tutorial.id, tutorial);
        setTutorials(
          tutorials.map((t) =>
            t.id === updatedTutorial.id ? updatedTutorial : t
          )
        );
      } else {
        // Add new tutorial
        const newTutorial = await addTutorial(tutorial);
        setTutorials([...tutorials, newTutorial]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>Tutorials Section</h2>
        <Button variant="primary" onClick={handleAdd} className="mb-3">
          + Add Tutorial
        </Button>
      </div>
      <TutorialList
        tutorials={tutorials}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <TutorialModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        tutorial={selectedTutorial}
        onSave={handleSave}
      />
    </div>
  );
};

export default Tutorials;
