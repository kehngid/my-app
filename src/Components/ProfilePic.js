import React from 'react';
import profile from '/Users/jakluge/Desktop/my-app/src/Images/IMG_8419.jpg';
import '/Users/jakluge/Desktop/my-app/src/Stylesheets/ProfilePic.css';

console.log(profile);

function ProfilePic()
{
    return <img src={profile} alt="Logo" className="pic"/>;
}

export default ProfilePic;