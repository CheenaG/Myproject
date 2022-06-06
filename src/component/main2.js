import React,{useEffect, useState} from "react";
import axios from "axios";
import "./main2.css";

const Main2=()=>{
    const[list,setData] =useState([]);
    const[profile,setProfile] =useState("");
    useEffect(()=>{
        axios.get("http://refertest.pythonanywhere.com/job/openings")
        
        .then(res=>{
            setData(res.data.data)
            
        })

        getProfile();

  
    },[])
    const getProfile=()=>{
        axios.get("http://refertest.pythonanywhere.com/user/data")
        
        .then(res=>{
            setProfile(res.data.data)
            console.log(res)
           
        })


    }

    



    return(
        <div className="container-fluid">
            <div className="col-lg-12 text-center pt-4  d-flex" style={{justifyContent:"center"}}>
               <div> 
                <img src={profile.pictureUrl} className="profilepic"/>
                <div className="text-danger">{profile.college}</div>
                <div>{profile.name}</div>
                </div>
            </div>
            <div className="row">
           {list.length > 0 ?

               (list.map((dname,index)=>{
                   return(

                <div className="card m-3 main-card" key={index.toString()}>
            
                <div className="card-header text-center text-color">{dname.company}</div>
                <div className="card-body">

                    <div className="row">
                       <div className="text-bold">Designation : </div> 
                       <div className="pl-2">{dname.designation}</div> 
                    </div>
                    <div className="row">
                      <div className="text-bold"> Company Name : </div> 
                      <div  className="pl-2">{dname.company}</div> 
                    </div>
                    <div className="row">
                        <div className="text-bold">Job Location : </div>
                        <div  className="pl-2">{dname.location}  </div>
                        
                    </div>
                    <div className="row">
                        <div className="text-bold">Experience : </div>
                        <div  className="pl-2">{dname.min_experience === 0?"Fresher":dname.min_experience}  </div>
                        
                    </div>
                    <div className="row">
                        <div className="text-bold">Skills : </div>
                        <div  className="pl-2">{dname.skills.toString()}  </div>
                        
                    </div>
                    
                </div>

            </div>

                   )


               })):null

           }
          </div>  

        </div>
    )
}
export default Main2;