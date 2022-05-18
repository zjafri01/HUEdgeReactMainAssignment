import axios from 'axios';
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import '../css/Course.css';
import responseData from '../assets/data.json';
import playIcon from '../assets/playButton.png'

function Course() {

  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const getCourse = async () => {
    await axios.get('https://627df5bb271f386cefee65c9.mockapi.io/api/v1/Hashedin/' + id)
      .then((response) => {
        console.log(response.data);
        setCourse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const getCourse = async () => {
  //       console.log(responseData.data);
  //       setCourse(responseData.data);
  // };

  useEffect(() => {
    getCourse();
  }, [])

  return (
    <div>
      <div style={{ padding: "10px" }}>
        <div className="headline">Discover Latest Courses on React</div>
      </div>
      <div style={{ padding: "10px" }}>
        <div style={{ marginLeft: "2%" }}>All Courses {">"} <strong>Responsive Design Course</strong></div>
      </div>
      <div className="courseDiv">
        <div className="courseDetail">
          <h3>{course.title}</h3>
          <h7>{course.title}</h7><br /><br />
          <label style={{ color: "rgb(255, 106, 0)" }}>{course.author}</label><br /><br />
          <button id="topic">React</button><button id="topic">React</button><button id="topic">React</button>
        </div>
      </div>
      <div className="courseDescriptionDiv">
        <div className="courseDetails">
          <h3>Course Details</h3>
          <h7>{course.description} {course.description}</h7><br /><br />
          <h7>{course.description} {course.description}</h7><br /><br />
          <h7>{course.description} {course.description}</h7><br /><br />
          <h7>{course.description} {course.description}</h7><br /><br />
          <h7>{course.description} {course.description}</h7><br /><br />
        </div>
        <div className="courseImagePriceDiv">
          <div className="imgId">
            <div style={{textAlign: "center",marginTop: "20%"}}>
              <img style={{ backgroundColor: "white", height: "auto", width: "40px" }} src={playIcon} />
            </div>
          </div>
          <div>
            <strong style={{fontSize:"30px"}}>{course.price}</strong><br/>
            <label className="courseOriginalPrice">{course.originalPrice}</label>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Course