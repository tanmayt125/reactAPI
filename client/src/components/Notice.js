import React from 'react';

import axios from 'axios';
import { Button } from 'bootstrap';

export default class Notice extends React.Component {
  state = {
    persons:[],
    link:"https://api.codingninjas.com/api/v3/events?event_category=WEBINAR&event_sub_category=Upcoming&tag_list=Career%20Guidance,Coding%20Concepts,Competitive%20Programming,Futuristic%20Tech&offset=0"
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
          txt+="</br></hr><small>";
          txt+=res.data.data.events[i].short_desc+"</small>";
          txt+="</div>"
        }
        document.getElementById('k').innerHTML=txt;
        if(res.data.data.events.length==0){
              document.getElementById('k').innerHTML="<h1> No event found!!!</h1>"; }
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
          <a class="nav-link active" href="#">Webinars</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/codingevent">Coding Events</a>
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