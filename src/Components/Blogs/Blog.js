import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import BlogModal from "./BlogModal";
import { Button } from "react-bootstrap";
import { fetchBlogs, addBlog, updateBlog, deleteBlog } from "./api/blogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogs = await fetchBlogs();
        setBlogs(blogs);
      } catch (error) {
        console.error(error);
      }
    };

    loadBlogs();
  }, []);

  const handleAdd = () => {
    setSelectedBlog(null);
    setShowModal(true);
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (formData) => {
    try {
      if (selectedBlog && selectedBlog._id) {
        // Edit existing blog
        const updatedBlog = await updateBlog(selectedBlog._id, formData);
        setBlogs(
          blogs.map((b) => (b._id === updatedBlog._id ? updatedBlog : b))
        );
      } else {
        // Add new blog
        const newBlog = await addBlog(formData);
        setBlogs([...blogs, newBlog]);
      }
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>Blogs Section</h2>
        <Button variant="primary" onClick={handleAdd} className="mb-3">
          + Add Blog
        </Button>
      </div>
      <BlogList blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
      <BlogModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        blog={selectedBlog}
        onSave={handleSave}
      />
    </div>
  );
};

export default Blogs;
