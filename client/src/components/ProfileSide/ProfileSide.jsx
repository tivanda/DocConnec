import React from 'react'
import Search from '../Search/Search'
import Profile from '../ProfileCard/ProfileCard'
import "./ProfileSide.css"
import FollowersCard from '../FollowersCard/FollowersCard'


const ProfileSide = () => {
    return (
        <div className="ProfileSide">
       

           <Profile location = "homepage"/>
           <FollowersCard/>
        </div>
    )
}

export default ProfileSide