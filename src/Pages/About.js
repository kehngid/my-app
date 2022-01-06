import React from 'react';
import ProfilePic from '../Components/ProfilePic.js';
import '../Stylesheets/About.css'

function About()
{
    return (
      <div>
        <div className="column1">
          <ProfilePic/>
        </div>
        <div className="column2">
          <div className="name">
            <h1>Jason Kluge</h1>
          </div>
          <div className="links">
            <h2>jason.kluge5813@gmail.com</h2>
            <h2>Github link</h2>
            <h2>LinkedIn link</h2>
          </div>
          <div className="title">
            <h1 >About</h1>
          </div>
          <div className="paragraph">
          <p>I'm a computer science major and statistics minor at the University of Texas at Dallas. I created this website to showcase projects I've worked on and am currently working on. </p>
          </div>
        </div>
      </div>
    );
}

export default About;