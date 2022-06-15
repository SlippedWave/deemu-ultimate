import {
   Grid,
   Box,
   Card,
   CardContent,
   Typography,
   CardMedia,
} from '@mui/material';
import React from 'react';

const MainCard = (props) => {
   return (
      <Box>
         <Card>
            <Box maxWidth={'100%'}>
               <Grid
                  container
                  spacing={4}
                  justifyContent='center'
                  columns={8}
                  alignItems='center'

                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     textAlign: 'center',
                     gap: '30px',
                     padding: '40px 0px'
                  }}
               >
                  <Grid item xs={8} sm={5}>
                     <Box>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '30px'}}>
                           <Typography variant='h5'>
                              {props.content1}
                           </Typography>
                           <Typography
                              sx={{ mt: 1 }}
                           >
                              {props.content2}
                           </Typography>
                        </CardContent>
                     </Box>
                  </Grid>

                  <Grid
                     item
                     xs={8}
                     sm={3}
                     display={'flex'}
                     flexDirection={'center'}
                     justifyContent={'center'}
                  >
                     <Box
                        maxWidth={300}
                        width='100%'
                     >
                        <a href='https://www.binance.charity'>
                           <CardMedia
                              component={'img'}
                              image={props.imgURL}
                              alt={props.imgAlt}
                           />
                        </a>
                     </Box>
                  </Grid>
               </Grid>
            </Box>
         </Card>
      </Box>
   );
};

export default MainCard;
