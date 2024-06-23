import React, { useState } from "react";
// import "./style.css"
import { useSelector } from "react-redux";
import SinglePhoto from "./SinglePhoto";


function Gallery() {
    const photos = useSelector((state) => state.images)
    const [id, setId] = useState()
    const [showPopup, setShowPopup] = useState(false)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="col-12 text-center mb-5">
                            <h1 className="border-bottom border-3 pb-2">Gallery</h1>
                        </div>
                        {showPopup && <SinglePhoto id={id} setShowPopup={setShowPopup} />}

                        <div className="d-flex flex-row justify-content-evenly flex-wrap">
                            {photos.map((items) => (
                                <div className="card mb-3" style={{ width: "18rem" }} key={items.id}>
                                    <img src={items.src} className="card-img-top img-fluid" alt="..." style={{ minHeight: '200px', maxHeight: '200px' }} onClick={() => [setId(items.id), setShowPopup(true)]} />
                                    <div class="card-body">
                                        <div className="card-text fw-semibold">Name: {items.name}</div>
                                        <div className="card-text">Place: {items.place}</div>
                                        {/* <div className="card-text">Description: {items.description.substring(0, 50)}...</div> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="gallery-heading"><h1>Gallery</h1></div>
            <div className="gallery-container">

                {showPopup && <SinglePhoto id={id} setShowPopup={setShowPopup} />}

                {photos.map((items) => {
                    return <div className="main-div" key={items.id} >
                        <div className="gallery-image" onClick={() => [setId(items.id), setShowPopup(true)]}>
                            <img src={items.src} alt="gallery" />
                        </div>
                        <div className="card-details">
                            <div className="">Name: {items.name}</div>
                            <div className="">Place: {items.place}</div>
                            <div className="">Description: {items.description}</div>
                        </div>
                    </div>
                })}
            </div> */}
        </>
    )

}

export default Gallery;