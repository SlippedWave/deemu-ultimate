import {
   Grid,
   Box,
   Card,
   CardContent,
   Typography,
   CardMedia,
} from '@mui/material';
import React from 'react';


const GameCard = (props) => {
   return (
      <Box>
         <Card
            style={{
               padding: '40px 20px',
            }}
         >
            <Box maxWidth={'100%'}>
               <Grid
                  container
                  spacing={4}
                  justifyContent='center'
                  columns={8}
                  alignItems='center'
               >
                  <Grid item xs={8} sm={5}>
                     <Box>
                        <CardContent>
                           <Typography
                              variant='h6'
                              fontWeight='bold'
                           >
                              {props.title}
                           </Typography>
                           <Typography
                              sx={{ mt: 1 }}
                           >
                              {props.content}
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
                        maxWidth={100}
                        width='100%'
                        display={'flex'}
                        flexDirection={'center'}
                        justifyContent={'center'}
                        alignItems='center'
                     >
                        <CardMedia
                           component={'img'}
                           image={props.imgURL}
                           alt={props.imgAlt}
                        />
                     </Box>
                  </Grid>
               </Grid>
            </Box>
         </Card>
      </Box>
   );
};

export default GameCard;
