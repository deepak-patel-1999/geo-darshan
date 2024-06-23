import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const SinglePhoto = ({ id, setShowPopup }) => {
    const allPhotos = useSelector((state) => state.images);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const index = allPhotos.findIndex((photo) => photo.id === id);
        setPhotoIndex(index);
        setInitialized(true);
    }, [id, allPhotos]);

    // Render nothing until initialized
    if (!initialized || photoIndex === -1 || allPhotos.length === 0) {
        return null;
    }

    const { src, name, place, description } = allPhotos[photoIndex];

    const handleLeftButtonClick = () => {
        const newIndex = (photoIndex - 1 + allPhotos.length) % allPhotos.length;
        setPhotoIndex(newIndex);
    };

    const handleRightButtonClick = () => {
        const newIndex = (photoIndex + 1) % allPhotos.length;
        setPhotoIndex(newIndex);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="photoBackground">
                        <div className="navigation-buttons left-button">
                            <button type="button" className='btn' onClick={handleLeftButtonClick} >
                                {/* <BsChevronLeft size={24} color="#fff" /> */}
                                <img src="/images/left-arrow.svg" alt="left-arrow" />
                            </button>
                        </div>

                        <div className="photoContainer">
                            {/* close button */}
                            <button type="button" onClick={() => setShowPopup(false)}>
                                <AiOutlineCloseCircle size={24} color="#fff" />
                            </button>
                            <img src={src} alt="gallery" />
                        </div>

                        <div className="single-photo-detail">
                            <div className="fs-6 mb-1 fw-semibold">Name: {name}</div>
                            <div className="fs-6 mb-1">Place: {place}</div>
                            {/* <div className="fs-6 mb-1">Description: {description}</div> */}
                        </div>

                        <div className="navigation-buttons right-button">
                            <button type="button" className='btn' onClick={handleRightButtonClick}>
                                {/* <BsChevronRight size={24} color="#fff" /> */}
                                <img src="/images/right-arrow.svg" alt="right-arrow" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default SinglePhoto;
