import React, { useEffect, useState } from "react";
import { fetchTutorials } from "./Tutorials/api/tutorials";
import { serverUrl } from "../utils/apiHandler";

const Tutorial = () => {
  const [tutorials, setTutorials] = useState([]);

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

  return (
    <div className="container">
      <div class="row mt-3">
        {tutorials.map((tutorial) => (
          <div class="col-12 col-md-4  mb-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{tutorial.title}</h5>
                <p class="card-text">{tutorial.subtitle}</p>
                <a
                  href={`${serverUrl}/uploads/${tutorial.file}`}
                  class="btn btn-primary"
                  target="_blank"
                >
                  Open PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    // <div className="main-tutorial">
    //     {pdf.map((items) => (
    //         <div className="pdf-div" key={items.id}>
    //             <embed className="pdf-embed" src={items.src} />
    //             <a className="download-link" href={items.src} target='_blank' >
    //                 View PDF
    //             </a>
    //         </div>
    //     ))}
    // </div>
  );
};

export default Tutorial;
