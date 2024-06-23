import React from 'react'
import { useState, useEffect } from 'react';

function Home() {
    const [dataIndex, setdataIndex] = useState(0);
    const dataList = [
        {
            title: ' 1Vasuki indicus, a 47 million-year-old snake fossil from Gujarat ',
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
            title: ' 3 Write card heading here',
            body: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ea voluptatem fuga beatae libero praesentium exercitationem? Doloribus sit veritatis dolore tempora quas vero praesentium culpa voluptatum adipisci hic, reprehenderit tenetur quidem nostrum laudantium, sequi itaque ab quod accusantium quia debitis!',
            ],
            imageSrc: 'images/snake.jpg',
        },
        {
            title: ' 4 Write card heading here',
            body: [
                'ffty',
            ],
            imageSrc: 'images/snake.jpg',
        },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setdataIndex((prevIndex) => (prevIndex + 1) % dataList.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">

                        <h1>Latest Research and Reviews</h1>

                        <div className="card mb-3">
                            <div class="row g-0">

                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{dataList[dataIndex].title}</h5>
                                        <p class="card-text">{dataList[dataIndex].body.map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}</p>
                                        {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
                                    </div>
                                </div>

                                <div class="col-md-4 d-flex align-items-center justify-content-center">
                                    <img src={dataList[dataIndex].imageSrc} class="img-fluid rounded-start" alt="image" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Home
