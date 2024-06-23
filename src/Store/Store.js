import { configureStore } from "@reduxjs/toolkit";
import { galleryReducer } from "../Slice/Slice";
import { pdfReducer } from "../Slice/Slice";

const store = configureStore({
    reducer: {
        images: galleryReducer,
        pdfs: pdfReducer
    }
});

export default store;
