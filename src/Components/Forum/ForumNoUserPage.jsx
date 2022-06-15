import {
   Container,
   Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import LogInModal from '../../Components/General/LogInModal';
import goToTop from '../../Helpers/goToTop';

const ForumNoUserPage = () => {
   useEffect(() => {
      goToTop();
   }, []);

   return (
      <Box maxWidth='lg' component={Container}>
         <Box
            my={5}
            sx={{
               display: 'flex',
               paddingTop: '20%',
               flexDirection: 'column',
               alignItems: 'center',
               textAlign: 'center',
               width: '1',
               gap: '50px',
            }}
         >
            <Box>
               <Typography variant='h2'>
                  DEEMU Forum
               </Typography>
               <Typography
                  variant='h5'
                  sx={{ mt: 4 }}
               >
                  El lugar donde la comunidad
                  dirige las acciones que mejoran
                  al mundo.
               </Typography>
            </Box>

            <Typography>
               <LogInModal />
            </Typography>
         </Box>
      </Box>
   );
};
export default ForumNoUserPage;
