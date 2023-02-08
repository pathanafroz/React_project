import { Button, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";


 export const ToDolist =()=>{
   const[Data,setData]=useState("")
   const handlesubmit=()=>{
    const obj={
      name:Data
    }
    setData([...Data,obj])
   }
    return(
        <div>
        <Grid container>
         <Grid item xs={3}></Grid>
     <Grid item xs={3}><TextField label="Enter value"type={"text"}onChange={(e)=>setData(e.target.value)}/></Grid>  
    <Grid item xs={3}><Button variant="contained"onClick={handlesubmit}>Submit</Button></Grid>
    <Grid item xs={3}></Grid>
        </Grid>
         
   
                           
   
               
            
         
        </div>
    )
 } 