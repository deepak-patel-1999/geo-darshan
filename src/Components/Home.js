import React, { useEffect, useState } from "react";
import { fetchBlogs, updateVisitorCounts } from "./Blogs/api/blogs";

import "./style.css";
import { serverUrl } from "../utils/apiHandler";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isVisitorCount, setIsVisitorCount] = useState(true);

  useEffect(() => {
    if (isVisitorCount) {
      const updateVisitorCount = async () => {
        try {
          await updateVisitorCounts();
          setIsVisitorCount(false);
        } catch (error) {
          console.error(error);
        }
      };

      updateVisitorCount();
    }
  }, [isVisitorCount]);

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
  return (
    <>
      <div className="mainHomeContainer">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <h1 className="text-center my-3">This is a News Blog</h1>
            {blogs.map((blog, index) => (
              <div className="col-8" key={index}>
                <div className="card mb-4 border cardDesign">
                  <img
                    src={`${serverUrl}/uploads/${blog.image}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-text justify-text">{blog.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
