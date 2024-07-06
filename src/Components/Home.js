import React from 'react'
import { useState } from 'react';
import "./style.css"

function Home() {
    const dataList = [
        {
            title: '1 Vasuki indicus, a 47 million-year-old snake fossil from Gujarat ',
            body: [
                'Researchers at the Indian Institute of Technology (IIT) Roorkee have reported the discovery of fossils of one of the largest snakes that ever existed and likely lived 47 million years ago during a period called the Middle Eocene. The fossils were found in Kutch, Gujarat, and the reptile, named Vasuki Indicus, could have been anywhere between 10 metres and 15 metres long, or as big as a modern-day school bus',

            ],
            imageSrc: 'images/snake.jpg',
        },
        {
            title: '2 Write card heading here',
            body: [
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum ad nulla aliquid delectus dolores sequi aperiam alias eius impedit ipsam, obcaecati quod quisquam deserunt ullam labore natus ipsum magni?',
            ],
            imageSrc: 'images/snake.jpg',
        },
        {
            title: '3 Write card heading here',
            body: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ea voluptatem fuga beatae libero praesentium exercitationem? Doloribus sit veritatis dolore tempora quas vero praesentium culpa voluptatum adipisci hic, reprehenderit tenetur quidem nostrum laudantium, sequi itaque ab quod accusantium quia debitis!',
            ],
            imageSrc: 'images/snake.jpg',
        },
        {
            title: '4 Write card heading here',
            body: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ea voluptatem fuga beatae libero praesentium exercitationem? Doloribus sit veritatis dolore tempora quas vero praesentium culpa voluptatum adipisci hic, reprehenderit tenetur quidem nostrum laudantium, sequi itaque ab quod accusantium quia debitis!',
            ],
            imageSrc: 'images/snake.jpg',
        },
    ];

    return (
        <>
            <div className='mainHomeContainer'>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <h1 className='text-center my-3'>This is a News Blog</h1>
                        {dataList.map((dataItem, index) => (
                            <div className="col-8" key={index}>
                                <div className="card mb-4 border cardDesign">
                                    <img src={dataItem.imageSrc} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">{dataItem.title}</h4>
                                        <p className="card-text justify-text">
                                            {dataItem.body.map((paragraph, pIndex) => (
                                                <span key={pIndex}>{paragraph}</span>
                                            ))}
                                        </p>
                                        <a href="#" className="stretched-link">Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
