import React from "react";
import { Stack, Typography,Box ,Grid} from "@mui/material";
import logo1 from "../../asset/logo1.png";
import Carditem from "./Carditem";

function IntialCard({generatedChat}) {
  const data = [
    {
      title: "Hi, what is the weather",
      subtitle: "Get immediate AI generated response",
    },
    {
      title: "Hi, what is my location",
      subtitle: "Get immediate AI generated response",
    },
    {
      title: "Hi, what is the temperature",
      subtitle: "Get immediate AI generated response",
    },
    {
      title: "Hi, how are you",
      subtitle: "Get immediate AI generated response",
    },
  ];
  return <div>
    <Stack justifyContent="center" alignItems="center" sx={{marginTop:{md:"150px",xs:"100px"}}} >
        <Typography variant="h2" sx={{color:"text.primary"}}>How Can I Help You Today?</Typography>
        <Box > <img src={logo1} alt="logo" style={{width:"70px"}}/></Box>
       
    </Stack>
    <Grid container spacing={2} sx={{marginTop:{md:"60px",xs:"50px"}}}>
        {data.map((datas,index)=> <Grid item xs={12} md={6}>
   <Carditem key={index} datas={datas} generatedChat={generatedChat}/>
  </Grid>)}
 
  </Grid>
  </div>;
}

export default IntialCard;
