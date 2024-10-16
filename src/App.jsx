
import React, { useState } from "react";
import "./Style.css"
import users from "./Db.jsx";
export default function GetData(){
let[set,setState]=useState(users)
   return(
    <>
    <div id="main">
    
     <h1 id="birth">{set.length} Birthdays today</h1><br /> <br /> 
     <div style={{marginBottom:"20px"}}>
     <section id="main2">
     {set.map((x)=>{
        return(
            <div key={x.id}>
                
            <div id="main3">
            <img src={x.profile} alt='' style={{height:"180px",width:"348px", borderRadius: "10px"}}/>
         
            <div id="main4">
               <h5 id="main5">{x.name} <br/>
                  {x.age}
               </h5>
            </div>
            <br/>
            </div>
            </div>
        )}
        )}
    </section>

     </div>
     </div>
     <button id="main6" onClick={()=>setState([])}>Clear All</button>
     
    </>
   ) 
}