import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { TextField ,Stack} from '@mui/material';
import { TbBulb } from "react-icons/tb";
import { GiCancel } from "react-icons/gi";
import { context } from "../theme/context";
import { useContext } from 'react';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', 
    maxWidth: 400,
   
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

export default function FeedbackModal({showfeedbackmodel, setshowfeedbackmodel, Selectedid, setchat}) {
  const {mode,setmode}=useContext(context);
    const [data,setdata]=useState("")
    const handleClose =(e)=>{
        e.preventDefault();
        setshowfeedbackmodel(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setchat((prev) =>
            prev.map((val) =>
              val.id === Selectedid ? { ...val, feedback: data } : val
            )
          );
        setdata("");
        setshowfeedbackmodel(false);
    }
  
    return (
      <div>
    
        <Modal
          open={showfeedbackmodel}
          onClose={()=>handleClose()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box component='form' onSubmit={(e)=>handleSubmit(e)} sx={style} style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%"}}>
           
            <Typography variant="h1"> <TbBulb style={{fontSize:"40px",color:mode==='light'?"black":"white"}}/>Provide Feedback</Typography>
            <Box onClick={(e)=>handleClose(e)}><GiCancel style={{fontSize:"30px" ,cursor: "pointer",color:mode==='light'?"black":"white" }} /></Box>
            </Stack>
            
            <TextField value={data} onChange={((e)=>setdata(e.target.value))} placeholder='your feedback is welcome' rows={6}  multiline sx={{ width: '100%',height:"100%",marginTop:"10px" }} required/>
           <Stack direction="row" justifyContent="flex-end"  sx={{ width: "100%", marginTop: 2 }}>   <button  style={{background:"#D7C7F4",width:"100px",height:"40px",border:"1px solid #D7C7F4",borderRadius:"10px",cursor: "pointer", "&:hover": {
                backgroundColor: "primary.dark",
                cursor:"pointer"
              }, }}>Submit</button>
        
           </Stack>
           </Box>
        </Modal>
      </div>
    );
  }