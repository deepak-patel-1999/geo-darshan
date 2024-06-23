import React from 'react';
import { useSelector } from 'react-redux';

const Tutorial = () => {
    const pdf = useSelector((state) => state.pdfs);

    return (
        <div className="container">
            <div class="row mt-3">
                {pdf.map((items) => (
                    <div class="col-12 col-md-4  mb-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{items.name}</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href={items.src} class="btn btn-primary" target='_blank'>Open PDF</a>
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
