import React, { useState } from 'react';
import {
   TextField,
   Button,
   Typography,
   Divider,
   InputAdornment,
   IconButton,
   Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from "react-redux"
import { signInAPI } from "../../store/actions"

const LogInModal = () => {
const [open, setOpen] = React.useState(false);
const handleOpenClose = () => setOpen(!open);
const dispatch= useDispatch()

const [loading, setLoading] = useState(false);

const [userEmail, setUserEmail] =
React.useState('');
const [userPassword, setUserPassword] =
React.useState('');

const [showPassword, setPasswordVisibility] =
React.useState(false);
const handleClickShowPassword = () =>
setPasswordVisibility(!showPassword);

const handleMouseDownPassword = (event) => {
event.preventDefault();
};

async function handleSubmit(e) {
   e.preventDefault();
   setLoading(true)

   dispatch(signInAPI(userEmail, userPassword))

   setLoading(false)
}

   const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '15%',
      minWidth: '350px',
      padding: '30px',
      bgcolor: 'white',
      borderRadius: 4,
      boxShadow: 24,
      p: 10,
   };

   return (
      <>
         <Button
            variant='contained'
            onClick={handleOpenClose}
         >
            iniciar sesión
         </Button>

         <Modal
            open={open}
            onClose={handleOpenClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
         >
            <Box
               sx={{
                  ...style,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
               }}
            >
               <Typography variant='h6'>
                  Iniciar sesión
               </Typography>

               <form onSubmit={handleSubmit}>
                  <Grid container spacing={5}>
                     <Grid item xs={12}>
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
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           onChange={(e) => {
                              setUserPassword(
                                 e.target.value
                              );
                           }}
                           required
                           fullWidth
                           autoComplete='off'
                           id='userPassword'
                           label='Contraseña'
                           variant='outlined'
                           type={
                              showPassword
                                 ? 'text'
                                 : 'password'
                           }
                           InputProps={{
                              endAdornment: (
                                 <InputAdornment position='end'>
                                    <IconButton
                                       aria-label='toggle password visibility'
                                       onClick={
                                          handleClickShowPassword
                                       }
                                       onMouseDown={
                                          handleMouseDownPassword
                                       }
                                       edge='end'
                                    >
                                       {showPassword ? (
                                          <VisibilityOff />
                                       ) : (
                                          <Visibility />
                                       )}
                                    </IconButton>
                                 </InputAdornment>
                              ),
                           }}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <Button
                           disabled={loading}
                           onClick={handleSubmit}
                           variant='contained'
                        >
                           Iniciar sesión
                        </Button>
                     </Grid>
                  </Grid>
               </form>
               <Divider />
               <Typography>
                  ¿Sin cuenta aún? Registrate{' '}
                  <Link to='/registrarse'>
                     aquí
                  </Link>
               </Typography>
               <Typography>
                  ¿Olvidaste tu contraseña?
                  Cámbiala{' '}
                  <Link to='/cambiar-contrasena'>
                     aquí
                  </Link>
               </Typography>
            </Box>
         </Modal>
      </>
   );
};

export default LogInModal;
