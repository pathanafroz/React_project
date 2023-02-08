import { TextField,Grid ,Button,card, CardContent} from "@mui/material";
import React, { useState } from "react";

 export const SchoolForm =()=>{
const[name,setName]=useState()
const[mobile,setMobile]=useState()
const[email,setEmail]=useState()
const[password,setPassword]=useState()
const[data,setData]=useState([])

const handlesubmit=()=>{
   const obj={
    firstName:name,
    MobileNumber:mobile,
    Emailid:email,
    conpassword:password


   };
   setData([...data,obj])
}
console.log(data)
const handleDelete=(index)=>{
const deleteData=data.filter((item,ind)=>ind != index)
    setData(deleteData)

}
    return(
        <div>
            <h1>School Form Registration</h1>
            <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
                <TextField label=" First Name"onChange={(e)=>setName(e.target.value)}/>
            </Grid>
            <Grid item xs={12}md={3}>
            <TextField label="mobile Number" type="Number"onChange={(e)=>setMobile(e.target.value)}/>
            </Grid>
            <Grid item xs={12}md={3}>
                <TextField label="Email Id" type="email"onChange={(e)=>setEmail(e.target.value)}/>
            </Grid>
            <Grid item xs={12}md={3}>
                <TextField label="password" type="Password"onChange={(e)=>setPassword(e.target.value)}/>
            </Grid>

            <Grid item xs={12}></Grid>
            <Grid item xs={6}></Grid>

            <Grid>  
                <Button variant="contained" onClick={handlesubmit}> submit</Button>
                </Grid>

            </Grid>

          {data.map((item,index)=>{
            return(
                <Grid item xs={3}>
                    <card>
                        <CardContent>
                <h1>name :{item.firstName}</h1>
                <h1>mobile :{item. MobileNumber}</h1>
                <h1>emailid :{item.Emailid}</h1>
                <h1>password :{item.conpassword}</h1>
                <Button variant="contained"color="error"onClick={()=>handleDelete(index)}>Delete</Button>
                        </CardContent>
                    </card>
                </Grid>
            )
          })}  
   

        </div>
    )
}    