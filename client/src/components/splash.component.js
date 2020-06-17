import React from 'react';
import splash from '../assets/splash.jpg'

function Splash(props) {
    return (
        <div>
            <h1> Welcome to SN8KRS, a peer to peer shoe trading marketplace </h1>
            <img src={splash} alt="Logo" />
        </div>
    )
}

export default Splash;