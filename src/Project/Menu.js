import React from 'react'
import './MenuStyle2.css'
import {Link} from 'react-router-dom'

const Menu = ()=>{
    return (
        <>
        <div className ="MenuStyle2">
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/About">About</Link></li>
            <li><Link to = "/Skills">Skills</Link></li>
            <li><Link to = "/Education ">Education</Link></li>
        </ul>
        </div> 
        </>
    )
}
export default Menu