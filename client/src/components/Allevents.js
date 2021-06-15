import React from 'react';

import axios from 'axios';
import { Button } from 'bootstrap';

export default class Allevents extends React.Component {
  state = {
    persons:[],
    link:"https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=Upcoming&tag_list=All%20Night%20Coding,Android,Aptitude%20Preparation,Campus%20Event,Career%20Guidance,Code%20Wars,Coding%20Concepts,Coding%20Marathon,Competitive%20Programming,Contest%20Solutions,Efficient%20Coding,Futuristic%20Tech,GSoC,Hackathon,Interview%20Preparation,Machine%20Learning,Online%20Coding%20Event,Placement,Programming%20Contest,Scholarship%20Test,Web%20Development,Women%20Who%20Code&offset=0"
  }

  componentDidMount() {
    axios.get(this.state.link)
      .then(res => {
        
    
        console.log(res);
        const persons = res;
        var i,txt="";
        for(i=0;i<res.data.data.events.length;i++){
          txt += "<div>";
          txt+="</br></hr><img src="+res.data.data.events[i].cover_picture+" width="+500+" height="+180+" /></br><b>";
          txt+=res.data.data.events[i].name+"</b>";
          txt+="</br></hr></br><small>";
          txt+=res.data.data.events[i].short_desc+"</small></br></hr><b>Users Registered : </b>";
          txt+=res.data.data.events[i].seats_filled+"</hr>"
          txt+="</br></br></div>"
        }
        document.getElementById('k').innerHTML=txt;
        this.setState({ persons });
      })
  }
  render() {
    return (
      <ul>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/allevents">All Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/about">Webinars</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/codingevent">Coding Events</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/allevents">Upcoming</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/allearchived">Archived</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:'100%',overflow:"visible",marginTop:"30px"}}>
        <div class="container" >
          <div class="row row-cols-2" id='k'>
            
          </div>
       </div>
        </div>
      </ul>
    )
  }
}