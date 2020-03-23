import React from 'react'
import './MenuStyle2.css'
 

const About = ()=>{
   const btn= {
         
        width :"50%"

    }
    return (
        <div className ="logo">
<div class="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>About Me</h2>
      <p>Yeah,I am Zahid Ayub a professional Software Engineer having couple of years of exeperinece in Software as well as Website Development </p>
      <button className="btn btn-default">Get in Touch</button>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-signal logo"></span>
    </div>
  </div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50"
  aria-valuemin="0" style ={btn} >
    50% Complete (info)
  </div>
</div>

<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-globe logo"></span>
    </div>
     
  </div>
</div>
        </div>
    )
}
export default About