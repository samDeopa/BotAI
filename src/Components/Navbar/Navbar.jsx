import React, { useContext } from 'react'

import {useOutletContext} from "react-router-dom"
import { Box, IconButton, Stack, Typography, colors, useMediaQuery } from '@mui/material'
import { IoMenu } from "react-icons/io5";
import {context} from "../theme/context";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
function Navbar({setclose}) {
   
    const isMobile=useMediaQuery("(max-width:800px)")
    const {mode,setmode}=useContext(context);
    const handletoggle=()=>{
        setmode((prev)=>prev==="light"?"dark":"light")
    }
    const handleclose=()=>{
        console.log("hello")
        setclose((prev)=>!prev);
    }
  return (
   
    <div>
     <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction ="row" justifyContent="center" alignItems="center">
            {isMobile &&
            <IoMenu style={{ fontSize: "30px",colors:"primary.main",cursor:"pointer"}} onClick={()=>handleclose()}/>
            }
            <Typography variant='h1'>Bot AI</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" alignContent="center" paddingRight="20px">
            <Typography sx={{marginTop:"10px",color:"text.primary",fontFamily:"Ubuntu",fontWeight:'1000'}}>{mode==='light'?("Light"):("Dark")}</Typography>
            <IconButton sx={{color:"text.primary",cursor:"pointer"}} onClick={()=>handletoggle()}>{mode==="light"?(<IoPartlySunnyOutline />):(<FaMoon />)}</IconButton>
        </Stack>
     </Stack>
  
    </div>
  )
}

export default Navbar