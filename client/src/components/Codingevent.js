import axios from 'axios'
import React,{useEffect, useState} from 'react'
const Codingevent=()=>{
    const [users,set]=useState({
        title:"",api:"",
    });
    const change1=()=>{
        set({api:"https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=Upcoming&tag_list=Android,Aptitude%20Preparation,Campus%20Event,Career%20Guidance,Coding%20Concepts,Competitive%20Programming,Contest%20Solutions,Efficient%20Coding,Futuristic%20Tech,GSoC,Hackathon,Interview%20Preparation,Machine%20Learning,Online%20Coding%20Event,Placement,Programming%20Contest,Web%20Development,Women%20Who%20Code&offset=0"})
        getusers();
    }
    const change2=()=>{
        set({api:"https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=Archived&tag_list=Android,Campus%20Event,Career%20Guidance,Coding%20Concepts,Competitive%20Programming,Contest%20Solutions,Futuristic%20Tech,Interview%20Preparation,Machine%20Learning,Web%20Development&offset=0"})
        getusers();
    }
    const getusers=async()=>{
       
        
        axios.get(users.api)
        .then(res => {
            
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
        })
    }
    useEffect(()=>{
        getusers();
    },[])
    return(
        <div>
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
           <button type="submit" class="btn btn-secondary" name='singnup' id='singnup'
           onClick={change1} style={{margin:"30px"}}>Upcoming</button>
           <button type="submit" class="btn btn-secondary" name='singnup' id='singnup'
           onClick={change2} style={{margin:"30px"}}>Archived</button>
           please double click it !!
           <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:'100%',overflow:"visible",marginTop:"30px"}}>
                 <div class="container" >
                 <div class="row row-cols-2" id='k'>
            
                 </div>
           </div>
        </div>
        </div>
    )
}
export default Codingevent;