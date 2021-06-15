import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';

const Home=()=>{
  return(
    <div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
      <Link class="nav-link active" to="/allevents">
      <button type="button" class="btn btn-danger btn-lg" style={{margin:'10px',padding:'50px'}}>All Events</button>
      </Link>
      <Link class="nav-link active" to="/about">
      <button type="button" class="btn btn-warning btn-lg" style={{margin:'10px',padding:'50px'}}>Webinars</button>
      </Link>
      <Link class="nav-link active" to="/codingevent">
      <button type="button" class="btn btn-primary btn-lg" style={{margin:'10px',padding:'50px'}}>Coding Events</button>
      </Link>
      <Link class="nav-link active" to="/community">
      <button type="button" class="btn btn-success btn-lg" style={{margin:'10px',padding:'50px'}}>Community Tab</button>
      </Link>
      <Link class="nav-link active" to="/sendnotice">
      <button type="button" class="btn btn-secondary btn-lg" style={{margin:'10px',paddingTop:'50px',paddingBottom:'50px'}}>Share your journey to dream job with coding ninja</button>
      </Link>
      </div>
      <div style={{marginTop:"117px"}}>
      <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="navbar-text">
           Developed By : Tanmay Tiwar (NIT Patna)
        </div>
        <div class="navbar-text">
           Email : tanmay.cs18@nitp.ac.in
        </div>

      </div>

     </nav>
     </div>

    </div>
  )
}

export default Home