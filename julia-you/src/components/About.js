import React from "react";
import "../styles/About.css";

class About extends React.Component {
  render() {
    return (
      <>
        <div className="about-section" id="about">
          <h1 className='about-title'>
            <span>About</span>
          </h1>

          <div className="about-content">
            <div className='about-text'>
              <p className="font-monospace">
                Nice to meet you!
                <br /><br />
                I'm Julia, a third-year <strong>Computer Science</strong> student studying at the{" "}
                <strong>University of British Columbia (UBC)</strong>.
                <br /><br />
                Currently, I work as a <strong>Software Developer</strong> at the{" "}
                <a href="https://aws.amazon.com/government-education/cloud-innovation-centers/" target="_blank" rel="noopener noreferrer">
                  UBC x AWS Cloud Innovation Centre
                </a>
                {" "}where I develop cloud-based prototypes to solve real-world challenges.
                <br /><br />
                Beyond software development, I'm deeply passionate about education and fostering supportive spaces for people to explore tech! I've developed open-source Python course material, served as a Teaching Assistant for an undergraduate software course, and led game-based scripting classes.
                <br /><br />
                When I'm not solving software puzzles, you can find me playing badminton, painting, or catching the sunset! 🏸 🎨 🌅
              </p>
            </div >

            <div className='about-profile-image'>
              <img src="/assets/dog.jpg" alt='Profile' className='profile-img' />
              <svg viewBox="0 0 390.3 414.4" width="0" height="0">
                <clipPath id="blob3" clipPathUnits="objectBoundingBox" transform="scale(0.002562, 0.002413)">
                  <path class="st0" d="M276.8,56.9c23.5,25.9,33.9,61.3,53.7,95.3c19.8,33.9,49,66.4,57.3,104.6c8.2,38.2-4.5,82.3-35.2,102.2
	c-30.6,20-79.2,15.8-121.3,23.7c-42.1,7.8-77.8,27.6-118.6,31.1c-40.9,3.5-86.9-9.3-99.3-41.4c-12.3-32.1,8.9-83.4,8.9-127.5
	c0-44.2-21.1-81.2-22.3-121.6C-1.1,82.9,17.9,39,51.2,17.6C84.6-3.9,132.3-2.9,174.5,5.8S253.3,30.9,276.8,56.9z"/>
                </clipPath>
              </svg>



            </div >

          </div >
        </div>
      </>

    )
  }
}

export default About;
