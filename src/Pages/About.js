import React from 'react';
import ProfilePic from '../Components/ProfilePic.js';
import '../Stylesheets/About.css'
import '../Stylesheets/Page.css'

function About()
{
    return (
      <body>
        <div className="column1">
          <ProfilePic/>
        </div>
        <div className="column2">
          <div className="name">
            <h1>Jason Kluge</h1>
          </div>
          <br></br>
          <div className="links">
            <a href="mailto: jason.kluge5813@gmail.com">jason.kluge5813@gmail.com</a>
            <br></br>
            <a href="https://github.com/kehngid">Github</a>
            <br></br>
            <a href="https://www.linkedin.com/in/jakluge/">LinkedIn</a>
          </div>
          <br></br>
          <div className="title">
            <h1 >About</h1>
          </div>
          <div className="paragraph">
          <p>I'm a computer science major and statistics minor at the University of Texas at Dallas. I created this website to showcase projects I've worked on and am currently working on. </p>
          <p>My hobbies include learning and keeping insects, reading books, fencing, and playing a popular TCG called Magic: the Gathering.</p>
          </div>
        </div>
      </body>
    );
}

export default About;