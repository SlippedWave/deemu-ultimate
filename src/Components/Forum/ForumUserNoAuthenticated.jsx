import {
   Container,
   Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import goToTop from '../../Helpers/goToTop';
import MailImg from '../../Assets/Forum/mail.png';

const ForumUserNoAuthenticated = () => {
   useEffect(() => {
      goToTop();
   }, []);

   return (
      <Box maxWidth='lg' component={Container}>
         <Box
            py={5}
            sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               paddingTop: '20%',
               minHeight: '100vh',
               textAlign: 'center',
               gap: '55px',
            }}
         >
            <Typography variant='h4'>
               Confirma tu dirección de correo.
            </Typography>

            <img
               src={MailImg}
               alt='E-mail'
               style={{ maxWidth: '30%' }}
            />

            <Typography variant='h6'>
               Para continuar debes de confirmar
               tu dirección de correo electrónico.
            </Typography>
         </Box>
      </Box>
   );
};
export default ForumUserNoAuthenticated;
