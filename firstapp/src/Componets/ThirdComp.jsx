import React from "react";
import { TextField,Button } from "@mui/material";
export const ThirdComp=()=>{
    return(
        <div>
        <h1>This is ThirdComp</h1>
        <TextField label="Third name" type="text"classname="input"></TextField>
            <Button variant="contained">Third</Button>
            </div> 
    )
}
export default ThirdComp;