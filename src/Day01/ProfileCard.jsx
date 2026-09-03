import React from 'react'
import profile from '../assets/profile.jpg'
import "./ProfileCard.css"

function ProfileCard(){
    let name="srikala"
    
    return <div className='maindiv'>
    <img src={profile} alt="" className='ProfileImage' />
    <h1 id='name'>{name}</h1>
    <h2 id='role'>Role:FullStack Developer</h2>
    <table id='skills'>
        <th>Skills :</th>
        <tr><td>Python </td></tr>
        <tr><td>Django</td></tr>
        <tr><td>MySQL</td></tr>
        <tr><td>HTML</td></tr>
        <tr><td>CSS</td></tr>
        <tr><td>Javascript</td></tr>
    </table>
    <h2 id='location'>Location:Hyderabad</h2>
    <h2 id='mail'>Email:srikalabondugula08@gmail.com</h2>
    <button id='btn'>Contact Me</button>
    </div>
}
export default ProfileCard