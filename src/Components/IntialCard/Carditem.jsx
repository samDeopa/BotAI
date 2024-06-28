import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
function Carditem({datas,generatedChat}) {
    const theme = useTheme();
  return (
    <div>
        <Stack sx={{border: `1px solid ${theme.palette.primary.back}`,backgroundColor:theme.palette.primary.back ,padding:"20px",  boxShadow: 3, "&:hover": {
                backgroundColor: "primary.dark",
                cursor:"pointer"
              },}}  onClick={() => generatedChat(datas.title)} >
            <Typography sx={{color:theme.palette.text.primary,fontWeight:"800",fontFamily:'Ubuntu',fontSize:"20px"}}>{datas.title}</Typography>
            <Typography sx={{color:theme.palette.text.secondary}}>{datas.subtitle}</Typography>
            </Stack>

    </div>
  )
}

export default Carditem