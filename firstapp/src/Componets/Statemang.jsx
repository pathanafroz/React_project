import { Button } from "@mui/material";
import React, { useState } from "react";

export const Statemang=()=>{
    const [data,setdata]=useState("common service center")
    const [data1,setdata1]=useState("common service center")
    console.log(data)
    return(
        <div>

            {/* <input type="text"on chnage={(e)=>setdata(e.target.value)} /> */}
            {/* <h1>{data}</h1> */}
            <h1>{data1}</h1>
            {/* <Button onClick={()=>setdata("jadu") }>click and see magic</Button> */}
         <label htmlFor="">First Name</label>
         <input type=""on onChange={(e)=>setdata(e.target.value)}/>
         <label htmlFor="">Last Name</label>
         <input type="text"on onChange={(e)=>setdata(e.target.value)} />
         <h1>{data}</h1>
         <h1>{data}</h1>
        </div>
    )
}