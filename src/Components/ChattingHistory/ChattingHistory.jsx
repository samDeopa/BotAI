import { Typography ,Stack} from '@mui/material'
import React from 'react'
import{format,isEqual,startOfDay,add} from 'date-fns';
import ChattingCard from '../ChattingCard/ChattingCard';
import { useTheme } from "@mui/material/styles";

function ChattingHistory({data}) {
    const theme = useTheme();
    const FormatDate=(date)=>{
        let today=startOfDay(new Date());
        if(isEqual(today,date)){
            return 'Today Chats'
        }
        else if(isEqual(today,add(date,{day:1})))
            return 'Yesterday Chats'
        else{
           return format(date,'do LL yyyy');
        }

    }
  return (
    <div >
        <Stack    sx={{
          backgroundColor: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.light}`,
          padding: "30px",
          boxShadow: 3,
          marginTop:"30px"
          
        }}>
        <Typography variant='h2'>{FormatDate(startOfDay(new Date(data.date)))}</Typography>
        <Stack>
            {data.chat.map((item)=><ChattingCard item={item} readonly={true}/>)}
        </Stack>
        </Stack>
    </div>
  )
}

export default ChattingHistory;
