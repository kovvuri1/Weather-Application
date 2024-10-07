import React, { useState } from "react";
import "./index.css"
export default function App(){
    let api = {key: "9b2cbf282ecff73342af64f2258cc486",
        url:"https://api.openweathermap.org/data/2.5/weather"}
    let[search,setsearch]=useState("");
    let[data,setdata]=useState({});
    let[errormsg,seterrormsg]=useState("")
    function Seraching(){
        fetch(`${api.url}?q=${search}&appid=${api.key}&units=metric`)
        .then(res=>res.json().then(x=>{setdata(x);
                                       seterrormsg(x.message)}));
                                       seterrormsg("loading...")
    }
    let usingkey=(e)=>{
        if (e.key==="Enter"){
            Seraching();    
        }
    }
    console.log(errormsg)
    // console.log(data)
    return(<>
    <div  className="bg">
    <div className="inner">
    <h1 style={{color:"red"}}>Weather Wise</h1><br />
    <input onChange={e=>{setsearch(e.target.value);seterrormsg("")}}  onKeyPress={usingkey} placeholder="Enter city name for weather updates" type="Search"/>
    <button onClick={Seraching} onKeyUp={usingkey} >Search</button>
    <button onClick={()=>{setdata({})}}>Clear</button>  
    </div>
    <div className="details">
        {(data.main!== undefined)?
          (<>
          <h1>{data.name}</h1>
          <h1>Temparature : <b> {data.main.temp} &deg;C</b> </h1>
          <h1>Name:{data.name}</h1>
         <h1>{data.base}</h1>
         <h1>{data.cod}</h1>
        <h1>humidity:{data.main.humidity}</h1>
        <h1>pressure:{data.main.pressure}</h1>
        <h1>temp:{data.main.temp}</h1>
        <h1>wind:{data.wind.speed}</h1>
          </>):
          (errormsg)}
    </div>
    </div>
    </>)
}
 