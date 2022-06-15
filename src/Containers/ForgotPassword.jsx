import {
   Button,
   Card,
   CardContent,
   Container,
   TextField,
   Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { resetPassword } from '../Firebase/AuthFunctions';

const ForgotPassword = () => {
   const [userEmail, setUserEmail] =
      React.useState('');
   const [loading, setLoading] = useState(false);

   async function handleSubmit(e) {
      e.preventDefault();

      if (!userEmail) {
         return;
      }

      await resetPassword(userEmail);
      setLoading(false);
   }

   return (
      <Box marginTop={'10vh'}>
         <NavBar />

         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               paddingTop: '10%'
            }}
         >
            <Card style={{ width: '600px', maxWidth: '90vw' }}>
               <CardContent>
                  <Container
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '40px 20px',
                        gap: 30,
                     }}
                  >
                     <Typography>
                        ¿Olvidaste tu contraseña?
                     </Typography>
                     <form
                        onSubmit={handleSubmit}
                     >
                        <TextField
                           onChange={(e) => {
                              setUserEmail(
                                 e.target.value
                              );
                           }}
                           required
                           fullWidth
                           id='userEmail'
                           label='Correo'
                           variant='outlined'
                        />
                        <Button
                           disabled={loading}
                           onClick={handleSubmit}
                           type='submit'
                           sx={{ marginTop: 3 }}
                           variant='contained'
                        >
                           Cambiar contraseña
                        </Button>
                     </form>
                  </Container>
               </CardContent>
            </Card>
         </div>
      </Box>
   );
};

export default ForgotPassword;
