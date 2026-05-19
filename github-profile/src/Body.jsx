import React from "react";
import { useEffect } from "react";
import { useState } from "react";


function Body(){
    const [Profile,setProfile] = useState([])
    const [searchProfile, setsearchProfile] = useState("")


    async function generateProfile(count){
        const ran = Math.floor(1+Math.random()*10000)
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`)
        const data = await response.json()
        

        setProfile(data)
    }
  
    useEffect(()=>{
       generateProfile(10) 

    },[])


    return(

        <div className="but">
            <input type="text" className="input" value={searchProfile} onChange={((e)=>{setsearchProfile(e.target.value)})}/>
            <button onClick={(()=>{generateProfile(Number(searchProfile))})}>Search Profiles</button>

      
        <div className="profile">

            {
                Profile.map((value)=>{
                    return(
                        <div key={value.id} className="cards">
                            <img src={value.avatar_url}/>
                            <h2>{value.login}</h2>
                            <a href={value.html_url} target="_blank">Profile</a>

                        </div>
                    )
                })
            }
              </div>
        </div>
    )
}

export default Body