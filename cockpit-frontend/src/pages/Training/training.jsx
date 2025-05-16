import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './training.css';
import Header from '../../components/Header/Header';
import FooterSection from '../../components/Footer/footer';

const courses = [
  { title: "Air Navigation", desc: "General, Instruments, Radio", img: "images/frame.png" },
  { title: "Air Navigation", desc: "General, Instruments, Radio", img: "images/frame.png" },
  { title: "Air Navigation", desc: "General, Instruments, Radio", img: "images/frame.png" },
  { title: "Air Navigation", desc: "General, Instruments, Radio", img: "images/frame.png" },
  { title: "Air Navigation", desc: "General, Instruments, Radio", img: "images/frame.png" },
];

function CourseCardGrid() {
  return (
    <>
      <Header />
      <section className="p-5 bg-light">
        <div className="container">
          <h1 className="fw-bold text-dark-blue mb-3">
            Discover Our DGCA Question Banks
          </h1>
          <p className="text-muted fs-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
          </p>
        </div>
      </section>
      <div className="container mb-5">
        <div className="course-grid-container">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-image">
                <img src={course.img} alt={course.title} />
              </div>
              <div className="course-content">
                <h5>{course.title}</h5>
                <p>{course.desc}</p>
                <button className="start-btn">Start</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default CourseCardGrid;