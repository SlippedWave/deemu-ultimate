import {
   Box,
   Card,
   CardMedia,
   CardContent,
   Typography,
} from '@mui/material';
import React from 'react';

const SimpleCard = (props) => {
   return (
      <Box
         sx={{
            height: '550px',
         }}
      >
         <Card sx={{ height: '100%' }}>
            <CardContent
               sx={{
                  height: '90%',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '90%',
                  justifyContent: 'space-between',
               }}
            >
               <CardMedia
                  component={'img'}
                  sx={{ width: '151' }}
                  image={props.imgURL}
                  alt={props.imgAlt}
               />
               <Typography>
                  {props.title}
               </Typography>
               <br />
               <Typography>
                  {props.option}
               </Typography>   
               <br />
               <Typography>
                  {props.content}
               </Typography>

               <a href={props.link}>
                  <Typography>
                     Más información...
                  </Typography>
               </a>
            </CardContent>
         </Card>
      </Box>
   );
};

export default SimpleCard;
