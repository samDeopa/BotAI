import React, { useState ,useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Stack, Typography } from '@mui/material';
import Chatfilter from '../../Components/Chatfilter/Chatfilter';
import { useTheme } from "@mui/material/styles";
import ChattingHistory from '../../Components/ChattingHistory/ChattingHistory';

function Past({setclose}) {
  const [filteredchat,setfilteredchat]=useState([]);
  const [saveChat,setsaveChat]=useState([]);
  const theme = useTheme();
  useEffect(()=>{
    const localChat=localStorage.getItem("chat") ||[];
    if(localChat.length>0){
      setsaveChat(JSON.parse(localChat));
      setfilteredchat(JSON.parse(localChat));
    }
   console.log(saveChat);
  },[])
  console.log(filteredchat)
    return (
    <Stack  sx={{ height: '700px', overflowY: 'auto', width: '100%',  "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
      borderRadius: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(151, 133, 186,0.4)",
      borderRadius: "8px",
    }, }}>
       <Navbar setclose={setclose} />
      <Stack>
        <Stack direction="column" justifyContent="center" alignItems="center" paddingTop="30px">
        <Typography variant='h2'>Conversation History</Typography>
         {saveChat.length>0 && <Chatfilter saveChat={saveChat} setfilteredchat={setfilteredchat} />}

         {saveChat.length<=0 && <Stack 
             direction="row"
             sx={{
               bg: theme.palette.primary.light,
               border: `1px solid ${theme.palette.primary.light}`,
               padding: "10px 100px 10px 100px",
               boxShadow: 3,
             }}
             alignItems="center"
             marginTop="30px"
             borderRadius="10px"
             marginLeft="30px"
             marginRight="30px"
             fontSize="30px"
           >

          No Saved Chats
          </Stack>}
        {( saveChat.length>0 && filteredchat.length===0)&&
        <Stack 
             direction="row"
             sx={{
               bg: theme.palette.primary.light,
               border: `1px solid ${theme.palette.primary.light}`,
               padding: "10px 100px 10px 100px",
               boxShadow: 3,
             }}
             alignItems="center"
             marginTop="30px"
             borderRadius="10px"
             marginLeft="30px"
             marginRight="30px"
             fontSize="30px"
           >
         <Typography>  No such Chat</Typography>
        
          </Stack>}



          {filteredchat.length>0 &&
          <Stack >
            {filteredchat.map((data,index)=><ChattingHistory data={data} key={index}/>)}
            </Stack>
              
          }   
 
       
      
     
       </Stack>
       </Stack>

    </Stack>
  )
}

export default Past;