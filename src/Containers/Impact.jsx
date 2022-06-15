import {
   Box,
   Button,
   Divider,
   Grid,
   Container,
   Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import NavBar from '../Components/NavBar/NavBar';

import MainCard from '../Components/Impact/MainCard';
import SecondaryCard from '../Components/Impact/SecondaryCard';
import SocialMediaIcons from '../Components/General/SocialMediaIcons';
import EarthImage from '../Assets/Impact/EarthImage.png';

import {
   MainCardContent,
   cards,
} from '../Assets/Impact/ImpactTexts';
import { HashLink } from 'react-router-hash-link';
import goToTop from '../Helpers/goToTop';

const Impact = () => {
   useEffect(() => {
      goToTop();
   }, []);

   return (
      <Box>
         <NavBar />
         <Box
            maxWidth='lg'
            mt={5}
            component={Container}
            sx={{
               justifyContent: 'center',
            }}
         >
            <Grid
               sx={{
                  minHeight: '90vh',
                  paddingTop: '8%',
               }}
               container
               columns={12}
            >
               <Grid
                  item
                  md={7}
                  sm={12}
                  sx={{ marginTop: '10%' }}
               >
                  <Typography variant='h3'>
                     Fomentando DEFI de una manera
                     divertida buscaremos cambiar
                     el mundo.
                  </Typography>

                  <Button
                     component={HashLink}
                     smooth
                     to='#impacto'
                     sx={{
                        mt: '30px',
                        mb: '30px'
                     }}
                     variant='contained'
                  >
                     <Typography>
                        Nuestro impacto
                     </Typography>
                  </Button>
               </Grid>

               <Grid item md={5} sm={12}>
                  <img
                     src={EarthImage}
                     alt='Earth'
                     style={{
                        width: '100%',
                        minWidth: '350px',
                        
                     }}
                  />
               </Grid>
            </Grid>

            <Grid
               marginTop={10}
               id='impacto'
               container
               spacing={4}
               justifyContent='center'
               alignItems='center'
               columns={24}
            >
               <Grid item xs={24}>
                  <MainCard
                     content1={
                        MainCardContent.content1
                     }
                     content2={
                        MainCardContent.content2
                     }
                     imgAlt='BinanceCharity'
                     imgURL={
                        MainCardContent.imgURL
                     }
                  />
               </Grid>

               <Grid item xs={24} sx={{ margin: '40px 0px' }} >
                  <Box>
                     <Divider></Divider>
                  </Box>
               </Grid>

               <Grid item xs={24}>
                  <Box>
                     <Typography variant='h5'>
                        Propuestas de apoyo de este mes
                     </Typography>
                  </Box>
               </Grid>

               {cards.map((card) => (
                  <Grid
                     item
                     xs={24}
                     sm={8}
                     id={card.id}
                  >
                     <SecondaryCard
                        title={card.title}
                        link={card.url}
                        option={card.option}
                        imgURL={card.imgURL}
                        imgAlt={card.title}
                        content={card.content}
                     />
                  </Grid>
               ))}

               <Grid item xs={24} >
                  <Box>
                     <Divider></Divider>
                  </Box>
               </Grid>

               <Grid item xs={24}>
                  <SocialMediaIcons />
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
};
export default Impact;
