import React from 'react';
import TopHome from './topHome'
import SecondHome from './secondHome';
import NavBar from '../NavBar/index';

function homeComponents () {
    return(
        <div>
            <TopHome></TopHome>
            <NavBar></NavBar>
            {/* <SecondHome></SecondHome> */}
        </div>
        
    )
}

export default homeComponents;