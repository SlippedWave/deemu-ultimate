import {
   Box,
   Container,
   Divider,
   Grid,
   Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import NavBar from '../Components/NavBar/NavBar';

import {
   ShowCard1Content,
   ShowCard2Content,
   cardsObjectives
} from '../Assets/Start/StartTexts';

import ObjectivesCard from '../Components/Home/ObjetivesCard';
import FAQAccordion from '../Components/Home/FAQAccordion';
import MainImage from '../Assets/Start/img.jpg';
import SocialMediaIcons from '../Components/General/SocialMediaIcons';
import goToTop from '../Helpers/goToTop';

const Start = () => {
   useEffect(() => {
      goToTop();
   }, []);

   return (
      <Box
         style={{
            display: 'flex',
            alignItems: 'center',
         }}
      >
         <NavBar />
         <Box
            maxWidth='lg'
            component={Container}
            mt={5}
            sx={{
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <Grid
               container
               justifyContent='center'
               sx={{
                  minHeight: '100vh',
                  paddingTop: '8%',
                  marginTop: '1%',
                  
               }}
            >
               <Grid
                  item
                  md={5}
                  sm={12}
                  sx={{
                     marginTop: '3%',
                     alignItems: 'center',
                  }}
               >
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                     }}
                  >
                     <Typography variant='h2'>
                        DEEMU
                     </Typography>

                     <Typography variant='h6'>
                        {ShowCard1Content.content}
                     </Typography>
                  </div>
               </Grid>

               <Grid item md={7} sm={12}>
                  <img
                     src={MainImage}
                     alt='DEEMU Logo'
                     style={{
                        width: '100%',
                        minWidth: '400px',
                        marginLeft: 'auto',
                     }}
                  />
               </Grid>
            </Grid>

            <Grid
               container
               spacing={4}
               justifyContent='center'
               columns={24}
            >
               <Grid item xs={24}>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: '50px',
                        minHeight: '50vh',
                     }}
                  >
                     <Typography variant='h4'>
                        {ShowCard2Content.title}
                     </Typography>
                     <Typography variant='h6'>
                        {ShowCard2Content.content}
                     </Typography>

                     <img
                        src={ShowCard2Content.img}
                        alt='Crypto trading'
                        style={{
                           maxWidth: '40vw',
                        }}
                     />
                  </div>
               </Grid>

               <Grid item xs={24}>
                  <Box>
                     <Divider />
                  </Box>
               </Grid>

               <Grid item xs={24}>
                  <Box
                     style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                     }}
                  >
                     <Typography variant='h4'>
                        Objetivos
                     </Typography>
                  </Box>
               </Grid>

               <Grid item xs={24}>
                  <div
                     style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                     }}
                  >
                     <div
                        style={{
                           display: 'flex',
                           flexWrap: 'wrap',
                           justifyContent:
                              'center',
                           marginTop: '10px',
                           gap: '50px',
                           width: '80%',
                        }}
                     >
                        {cardsObjectives.map(
                           (card) => (
                              <ObjectivesCard
                                 key={card.id}
                                 title={
                                    card.title
                                 }
                                 content={
                                    card.content
                                 }
                                 imgURL={card.img}
                                 imgAlt={
                                    card.title
                                 }
                              />
                           )
                        )}
                     </div>
                  </div>
               </Grid>

               <Grid item xs={24}>
                  <Box>
                     <Divider></Divider>
                  </Box>
               </Grid>
               <Grid item xs={24}>
                  <Box
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                     }}
                  >
                     <Typography variant='h5'>
                        Dudas frecuentes
                     </Typography>
                  </Box>
               </Grid>
               <Grid item xs={24}>
                  <Box>
                     <FAQAccordion />
                  </Box>
               </Grid>
               <Grid item xs={24}>
                  <Box>
                     <Divider></Divider>
                  </Box>
               </Grid>
               <Grid item xs={24}>
                  <Box>
                     <SocialMediaIcons />
                  </Box>
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
};
export default Start;
