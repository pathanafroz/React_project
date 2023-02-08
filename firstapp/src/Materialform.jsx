import React, { useState } from "react"
import { Grid,Card,CardContent,Button,TextField } from "@mui/material"
export const Materialform =() =>{
        const [firstName,setFirstName]=useState("")
        const [SecondName,setSecondName]=useState("")
        const [ThirdName,setThirdName]=useState("")
        const [FourName,setFourName]=useState("")
        const [FiveName,setFiveName]=useState("")
        const [SixName,setSixName]=useState("")
        const [SevenName,setSevenName]=useState("")
        const [EightName,setEightName]=useState("")


        const handlesubmit=()=>{
               

                }
        
    return(
    <div><br />***
    
    <Grid container spacing={3}>
     <Grid item xs={3}><TextField label="First Name" onChange={(e)=>setFirstName(e.target.value)}/></Grid>
    <Grid item xs={3}><TextField label="middle Name"onChange={(e)=>setSecondName(e.target.value)}/></Grid>
    <Grid item xs={3}><TextField label="Mobile Number"type="Number"onChange={(e)=>setThirdName(e.target.value)}/></Grid>
    <Grid item xs={3}><TextField label="Email Id"onChange={(e)=>setFourName(e.target.value)}/></Grid>
    <Grid item xs={3}><TextField label="Address"onChange={(e)=>setFiveName(e.target.value)}/></Grid>
    <Grid item xs={3}><TextField label="Pin code"type="Number"onChange={(e)=>setSixName(e.target.value)}/></Grid>
    <Grid item xs={3}><TextField label="City"onChange={(e)=>setSevenName(e.target.value)}/></Grid>
    <Grid item xs={3}><TextField label="State"onChange={(e)=>setEightName(e.target.value)}/></Grid>
    <Grid item xs={5}></Grid>
    <Grid item xs={1}><Button variant="contained">Reset</Button></Grid>
    <Grid item xs={1}><Button variant="contained">Submit</Button></Grid>      
    <Grid item xs={5}></Grid>

    <Button variant="contained"color="success" onClick={handlesubmit}></Button>
            </Grid>
            {/* <h1>First Name:{firstName}</h1>
            <h1>Middle Name:{SecondName}</h1>
            <h1>Mobile Number:{ThirdName}</h1>
            <h1>Email Id :{FourName}</h1>
            <h1>Address:{FiveName}</h1>
            <h1>Pin code:{SixName}</h1>
            <h1>City:{SevenName}</h1>
            <h1>State:{EightName}</h1> */}

            </div>

    )}
