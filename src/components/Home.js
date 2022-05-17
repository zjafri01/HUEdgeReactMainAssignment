import axios from 'axios';
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import '/Users/zjafri/Desktop/HUE_React/finalassignment/src/css/Home.css';
import starActivated from '../assets/star_activated.png';

function Home() {
    const { id } = useParams();
    const [courses, setCourses] = useState([])
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
                    <label style={{textAlign:"left", alignSelf:"center", width:"90%"}}>{course.title}</label>
                    <label style={{alignSelf:"center", justifySelf:"left"}}>{course.author}</label>
                    <span style={{alignSelf:"center"}}>
                        <img className="star" src={starActivated} alt="starActivated"></img>
                        <label>&nbsp;&nbsp;&nbsp;{course.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    </span>
                    <label style={{alignSelf:"center", textDecoration:"line-through"}}>&nbsp;{course.originalPrice}</label>
                    <button className='addToCartButton' onClick={()=>{window.open("/cardetail/"+course.id,"_self")}}>ADD TO CART</button>
                    <button className='exploreButton' onClick={()=>{window.open("/cardetail/"+course.id,"_self")}}>{">"}</button>
                </div>
            ))}
        </div>
    )
}

export default Home