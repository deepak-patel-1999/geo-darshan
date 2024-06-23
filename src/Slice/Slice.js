import { createSlice } from "@reduxjs/toolkit";

const galleryInitialState = [
    {
        id: 1,
        src: "/gallery/image (1).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },

    {
        id: 2,
        src: "/gallery/image (2).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },

    {
        id: 3,
        src: "/gallery/image (3).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },

    {
        id: 4,
        src: "/gallery/image (4).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },

    {
        id: 5,
        src: "/gallery/image (5).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },

    {
        id: 6,
        src: "/gallery/image (6).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 7,
        src: "/gallery/image (7).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 8,
        src: "/gallery/image (8).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 9,
        src: "/gallery/image (9).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 10,
        src: "/gallery/image (10).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 11,
        src: "/gallery/image (11).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 12,
        src: "/gallery/image (12).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 13,
        src: "/gallery/image (13).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 14,
        src: "/gallery/image (14).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 15,
        src: "/gallery/image (15).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 16,
        src: "/gallery/image (16).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 17,
        src: "/gallery/image (17).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 18,
        src: "/gallery/image (18).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 19,
        src: "/gallery/image (19).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 20,
        src: "/gallery/image (20).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 21,
        src: "/gallery/image (21).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 22,
        src: "/gallery/image (22).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 23,
        src: "/gallery/image (23).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 24,
        src: "/gallery/image (24).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 25,
        src: "/gallery/image (25).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 26,
        src: "/gallery/image (26).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 27,
        src: "/gallery/image (27).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 28,
        src: "/gallery/image (28).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 29,
        src: "/gallery/image (29).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 30,
        src: "/gallery/image (30).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 31,
        src: "/gallery/image (31).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 32,
        src: "/gallery/image (32).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 33,
        src: "/gallery/image (33).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 34,
        src: "/gallery/image (34).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 35,
        src: "/gallery/image (35).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 36,
        src: "/gallery/image (36).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 37,
        src: "/gallery/image (37).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
    {
        id: 38,
        src: "/gallery/image (38).JPG",
        name: "Lorem ipsum dolor",
        place: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis aperiam nulla recusandae sapiente repudiandae, quia rerum eius doloremque sed dolorum perferendis natus facere debitis id. Cum tempore explicabo a nemo officia odio possimus minus molestiae numquam doloremque? Quos vitae deserunt eligendi voluptatem sequi eaque nihil recusandae, cum vero suscipit?",
    },
];

const pdfInitialState = [
    {
        id: 1,
        src: "/pdfs/Ex1-Morphometric_Analysis.pdf",
        name: "Morphometric Analysis using ARCGIS",
    },
    {
        id: 2,
        src: "/pdfs/damBridge.pdf",
        name: "Dam Breach Modelling using HEC-RAS",
    },
    {
        id: 3,
        src: "/pdfs/2D modelling.pdf",
        name: "2D Modelling using HEC-RAS",
    },
    {
        id: 3,
        src: "/pdfs/Coursework Seminar.pdf",
        name: "Understanding Environmental flow in the river ecosystem",
    },
];

const gallerySlice = createSlice({
    name: "gallery",
    initialState: galleryInitialState,
})

const pdfSlice = createSlice({
    name: "pdf",
    initialState: pdfInitialState,
})

export const galleryReducer = gallerySlice.reducer;
export const pdfReducer = pdfSlice.reducer;