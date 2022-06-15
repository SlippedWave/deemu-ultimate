import {
   Typography,
   Container,
   Button,
   Divider,
   Grid,
} from '@mui/material';
import { HashLink } from 'react-router-hash-link';

import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import SocialMediaIcons from '../Components/General/SocialMediaIcons';

import {
   miniGameContent,
   casinoContent,
} from '../Assets/DEEMUApp/DEEMUAppTexts';
import GameCard from '../Components/DEEMUApp/GameCard';
import goToTop from '../Helpers/goToTop';

import ArcadeImg from '../Assets/DEEMUApp/ARCADE.png';

const DEEMUApp = () => {
   useEffect(() => {
      goToTop();
   }, []);

   return (
      <Box
         style={{
            display: 'flex',
            alignItems: 'center',
         }}>
         <NavBar />
         <Box
            maxWidth='lg'
            component={Container}
            sx={{
               display: 'flex',
               flexDirection: 'column',
               width: '100%',
               gap: '200px',
            }}
         >
            <Grid
               justifyContent='center'
               sx={{
                  minHeight: '100vh',
                  marginTop: '10vh',
                  paddingTop: '5%',
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
                     Conoce DEEMU App
                  </Typography>

                  <Typography
                     variant='h4'
                     sx={{ mt: 4 }}
                  >
                     Reinventando las recompensas
                     por la diversión.
                  </Typography>

                  <Button
                     component={HashLink}
                     smooth
                     to='#sobre-DEEMUApp'
                     sx={{ marginTop: '40px' }}
                     variant='contained'
                  >
                     <Typography>
                        Saber más
                     </Typography>
                  </Button>
               </Grid>

               <Grid item md={5} sm={12}>
                  <img
                     src={ArcadeImg}
                     alt='arcade'
                     style={{
                        width: '100%',
                        minWidth: '400px',
                        padding: '1px',
                     }}
                  />
               </Grid>
            </Grid>

            <Box
               id='sobre-DEEMUApp'
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  width: '100%',
                  alignItems: 'center',
                  gap: '50px',
               }}
            >
               <Typography variant='h4'>
                  ¿Qué es DEEMU App?
               </Typography>
               <Typography variant='h6'>
                  DEEMU App es una aplicación para
                  dispositivos Android que permite
                  a los usuarios ganar DMU sólo
                  por jugar a los{' '}
                  <HashLink
                     smooth
                     to='#minijuegos'
                  >
                     minijuegos
                  </HashLink>{' '}
                  y apostando en los{' '}
                  <HashLink smooth to='#casino'>
                     {' '}
                     juegos del casino
                  </HashLink>
                  .
               </Typography>
            </Box>

            <Box
               id='minijuegos'
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  gap: '40px',
               }}
            >
               <Typography
                  variant='h5'
                  fontWeight='bold'
               >
                  Minijuegos
               </Typography>
               <Typography variant='h6'>
                  Los minijuegos son un grupo de
                  juegos sencillos, para jugar uno
                  debes de pagar una comisión y si
                  completas la tarea establecida
                  en la aplicación, recuperarás la
                  comisión y ganarás un bonus de
                  DMU.
               </Typography>
               <Typography variant='h6'>
                  Estos minijuegos son:
               </Typography>

               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     width: '100%',
                     gap: '30px',
                  }}
               >
                  {miniGameContent.map((i) => (
                     <GameCard
                        id={i.id}
                        title={i.name}
                        content={i.details}
                        imgURL={i.image}
                     />
                  ))}
               </Box>
            </Box>

            <Box
               id='casino'
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  gap: '40px',
               }}
            >
               <Typography
                  variant='h5'
                  fontWeight='bold'
               >
                  DEEMU Casino
               </Typography>
               <Typography variant='h6'>
                  En DEEMU casino podrás apostar
                  DMU en alguno de los 4 juegos de
                  apuestas que este ofrece.
               </Typography>

               <Typography variant='h6'>
                  Juegos disponibles:{' '}
               </Typography>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     width: '100%',
                     gap: '30px',
                  }}
               >
                  {casinoContent.map((i) => (
                     <GameCard
                        id={i.id}
                        title={i.name}
                        content={i.details}
                        imgURL={i.image}
                     />
                  ))}
               </Box>
            </Box>

            <Box>
               <Divider />
               <SocialMediaIcons />
            </Box>
         </Box>
      </Box>
   );
};

export default DEEMUApp;
