import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Chatfilter({saveChat,setfilteredchat}) {
    const [rate, setrate] = useState('All Ratings');

    const handleChange = (event) => {
      setrate(event.target.value);
    };
    useEffect(()=>{
        
            if (rate === 'All Ratings') {
              setfilteredchat(saveChat);
            } 
            else {
                const filtered = saveChat.filter(item => {
    
                    let get = false
    
                    item.chat.forEach(ch => {
                        if (ch.rating ===rate) {
                            get = true
                        }
                    })
    
                    return get;
                })
    
                setfilteredchat(filtered)
            }
    
        
    },[rate])
  
  return (
    <div>
            <Box sx={{ minWidth: 220 }} marginTop="40px">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rate}
          label="Filter By Rating"
          onChange={handleChange}
        >
          <MenuItem value='All Ratings'>All Ratings</MenuItem> 
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
    </div>
  )
}

export default Chatfilter