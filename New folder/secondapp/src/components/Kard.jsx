import React from "react"
import{Card,CardContent,Grid} from "@mui/material"

export const Kard =()=>{

let arr=[

{image_name:"./cr1.jpg"},
{image_name:"./cr2.jfif"},
{image_name:"./cr3.jfif"},
{image_name:"./cr4.jpg"},
{image_name:"./cr5.webp"},
{image_name:"./cr6.webp"},
{image_name:"./cr7.jpg"},
{image_name:"./cr8.jpg"},
{image_name:"./cr9.webp"},
{image_name:"./cr10.jpg"},
{image_name:"./cr11.jfif"},
{image_name:"./cr12.jfif"}]


    return(
        <React.Fragment>
           <Grid container spacing={2}>
           {
                    arr.map((item)=>{
                        return(
                            <Card>
                                <CardContent>

                                <img src={item.image_name} alt="" width={200} height={200} />
                                </CardContent>
                            </Card>
                        )
                    })
                }

           </Grid>
        </React.Fragment>
    )
}
            {/* {arr.map((item)=>){
                return(
                    <Grid item xs={4}>
                    <Card>
                         <CardContent>
                          alt=""width={300} height={300} />
                         <h1>Champion</h1>
                         </CardContent>
                     </Card>
                    </Grid>
                )

            }
               <Grid item xs={4}>
                <Card>
                    <CardContent>
                   <img src="cr1.jpg" alt=""width={300} height={300} />
                   <h1>Cr07</h1>
                    </CardContent>
                </Card>
               </Grid>
               <Grid item xs={4}>
               <Card>
                    <CardContent>
                        <img src="cr2.jfif" alt=""width={300} height={300} />
                        <h1>Winner</h1>
                    </CardContent>
                </Card>
               </Grid>
              
               
           </Grid> */}