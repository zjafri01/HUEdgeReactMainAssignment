import axios from 'axios';
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import '../css/Home.css';
import starActivated from '../assets/star_activated.png';

function Home() {
    const { id } = useParams();
    const [courses, setCourses] = useState([]);
    const getCourses = async () => {
        await axios.get('https://627df5bb271f386cefee65c9.mockapi.io/api/v1/Hashedin')
            .then((response) => {
                console.log(response.data);
                setCourses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getCourses();
    }, [])

    return (
        <div className="courses"><br />
            {courses.map((course) => (
                <div className="course">
                    <label className="courseIcon"></label>
                    <div style={{ textAlign: "left" }}>
                        <label className="courseTitle">{course.title}</label><br />
                        <div style={{ marginTop: "3%" }}>
                            <button className='keywords'>React</button> <button className='keywords'>React</button>
                        </div>
                    </div>
                    <label className="courseAuthor">{course.author}</label>
                    <span className="courseDiscountedPrice">
                        <img className="star" src={starActivated} alt="starActivated"></img>
                        <label style={{ fontSize: "12px" }}>&nbsp;&nbsp;&nbsp;{course.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    </span>
                    <label className="courseOriginalPrice">&nbsp;{course.originalPrice}</label>
                    <button className='addToCartButton'>ADD TO CART</button>
                    <button className='exploreButton' onClick={() => { window.open("/coursedetail/" + course.id, "_self") }}>{">"}</button>
                </div>
            ))}
        </div>
    )
}

export default Home