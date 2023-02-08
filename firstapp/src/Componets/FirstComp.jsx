import { Button, TextField } from "@mui/material";
import React from "react";
import {SecondComp} from"./SecondComp";


const FirstComp=()=>{
    return(
        <div>
            <p>this is first Component</p>
            <TextField label="First name" type="text"classname="input"></TextField>
            <Button variant="contained">First</Button>
          <SecondComp/>
  
</div>   
    )
}
export default FirstComp; 