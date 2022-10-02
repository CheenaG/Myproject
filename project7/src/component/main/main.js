import React,{useEffect, useState} from "react";
import axios from "axios";
import './main.css';
const Main=()=>{
    const[data,setData] =useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
            .then((json) => {
         setData(json);
        console.log(json);
            })
  
    })

    



    return(
        <div className="container-fluid">
            <div className="row">
           {
               data.map((dname,index)=>{
                   return(

                    <div className="card m-3" key={index.toString()}>
            
                <div className="card-header">Title</div>
                <div className="card-body">

                    <div className="row">
                       <div className="text-bold">Id : </div> 
                       <div>{dname.id}</div> 
                    </div>
                    <div className="row">
                      <div className="text-bold">  Name : </div> 
                      <div>{dname.name}</div> 
                    </div>
                    <div className="row">
                        <div className="text-bold">E-mail : </div>
                        <div>{dname.email}  </div>
                        
                    </div>
                </div>

            </div>

                   )


               })

           }
          </div>  

        </div>
    )
}
export default Main;