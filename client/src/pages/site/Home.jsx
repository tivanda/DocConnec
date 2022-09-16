import React from 'react'

import Post from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'


import '../style/Home.css'
 
const Home = () => {
    
    return ( 
     
        <div className="Home">
     
           <RightSide/>
             <Post/>
             <ProfileSide/>
             
        </div> 
    )
}

export default Home