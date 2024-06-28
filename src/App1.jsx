import { Grid} from "@mui/material"
import { useState, useMemo } from "react";
import { getDesignTokens } from "./Components/theme/Themepallete";
import {createTheme} from "@mui/material";
import React from 'react';
import {context } from "./Components/theme/context";
import {ThemeProvider} from "@mui/material";
import Sidebar from "./Components/Sidebar/Sidebar";
import Past from "./Pages/Past/Past";


function App1() {
  const [mode,setmode]=useState("light");
 
  const [close,setclose]=useState(false);
  const [chat, setchat] = useState([]);
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const backgroundColor = mode === 'light' ?   "rgba(151, 133, 186, 0.2) ": "primary.dark";
  return (
    <context.Provider value={{mode,setmode}}>
      {/* passing data to anywhere */}
      <ThemeProvider theme={theme}>
        {/* providing theme */}
    <div>
    <Grid container spacing={2}>
    <Grid item xs={12}
            md={2.5}
            position={{ xs: 'fixed', md: 'relative' }}
          
           
            sx={{
              bgcolor: 'primary.light',
              height:"100vh",
                // this is for mobile side 
              '@media (max-width:800px)': {
                width: '70%',
                transform: close? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 400ms ease',
               
              },
             
             
            }}
            style={{ paddingTop:"0px",
              paddingLeft:"0px"}}
          >
           
        <Sidebar  handleclose={()=>setclose(false)} setchat={setchat} chat={chat}/>
   
  </Grid>
  <Grid item xs={12} md={9.5} sx={{backgroundColor, height:"100vh",}}>
  <Past setclose={setclose}/>
  
  </Grid>
  
</Grid>
   
    </div>
    </ThemeProvider>
    </context.Provider>
  );
}

export default App1;
