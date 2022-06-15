import {
   Card,
   CardMedia,
   CardContent,
   Typography,
   Divider,
   Grid,
} from '@mui/material';
import React from 'react';

export default function SimpleCard(props) {
   return (
      <Grid item sm={7}>
         <Card justifyContent='center'>
            <CardContent>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     gap: '40px',
                  }}
               >
                  <Typography
                     variant='h6'
                     fontWeight='bold'
                  >
                     {props.title}
                  </Typography>

                  <Typography>
                     {props.content}
                  </Typography>

                  <Divider />

                  <CardMedia
                     component={'img'}
                     image={props.imgURL}
                     alt={props.imgAlt}
                  />
               </div>
            </CardContent>
         </Card>
      </Grid>
   );
}
