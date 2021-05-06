import React from 'react';
import image from './image.jpg';

function ProfilePhoto(props) {
    return (
        <div>
            
            <img src={image} alt ='myImage' />
        </div>
    );
}

export default ProfilePhoto;