import { Card,CardContent,Grid, Rating} from "@mui/material"
import { bgcolor, width } from "@mui/system";
import React from "react"
import {Data} from '../src/components/Data'
export const DataMap=()=>{
    console.log(Data);
    return(
        <div>
            <Grid container specing={4}>
            {Data.map((item)=>{
                return(
                    <Grid item xs={4}>
                        <Card sx={{bgcolor:"lightgreen"}}>
                            <CardContent>
                            <img src={item.image} height={200} weight={200}/>
                            <h5>{item.title}</h5>
                            <h5>{item.price}</h5>
                            <h5>{item.category}</h5>
                            <Rating>{item.rating}</Rating>
                            </CardContent> 
                        </Card>
                    </Grid>
                )
            }
           
            )}
            </Grid>
            </div>
    )
}