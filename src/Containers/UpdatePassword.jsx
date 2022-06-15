import {
   Button,
   Card,
   CardContent,
   Container,
   Grid,
   IconButton,
   InputAdornment,
   TextField,
   Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, {
   useEffect,
   useRef,
   useState,
} from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { setNewPassword } from '../Firebase/AuthFunctions';
import goToTop from '../Helpers/goToTop';
import { checkPasswordMatch, checkUserPassword } from '../Helpers/checkInputs';
import { setPasswordMatchHelperText, setUserPasswordHelperText } from '../Helpers/setHelperText';

const ForgotPassword = () => {
   const [userPassword, setUserPassword] = React.useState('');

   const [userPasswordCode, setUserPasswordCode] = React.useState(0);
   const [confirmedPasswordCode, setConfirmedPasswordCode] = React.useState(0);

   const [loading, setLoading] = useState(false);
   const [isButtonDisabled, disableButton] = useState(true);

   const [recordUserPassword, setRecordUserPassword] = React.useState(false);
   const [recordConfirmedPassword, setRecordConfirmedPassword] = React.useState(false);

   const [showPassword, setPasswordVisibility] = React.useState(false);

   const handleClickShowPassword = () => setPasswordVisibility(!showPassword);
   const handleMouseDownPassword = (event) => event.preventDefault();

   useEffect(() => {
      goToTop();
   }, []);

   useEffect(() => {
      if (userPasswordCode === 0 && confirmedPasswordCode === 0 && !loading &&
         recordConfirmedPassword && recordUserPassword) {
         disableButton(false);
      }
      else {
         disableButton(true);
      }
   }, [
      userPassword,
      recordConfirmedPassword,
      recordUserPassword,
      userPasswordCode,
      confirmedPasswordCode,
      loading
   ]);

   async function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);
      await setNewPassword(userPassword);
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
               paddingTop: '10%',
            }}
         >
            <Card
               style={{
                  width: '600px',
                  maxWidth: '90vw',
               }}
            >
               <CardContent>
                  <Container>
                     <div
                        style={{
                           display: 'flex',
                           flexDirection:
                              'column',
                           gap: '20px',
                        }}
                     >
                        <Typography>
                           Actualiza tu contraseña
                        </Typography>
                        <form
                           onSubmit={handleSubmit}
                        >
                           <Grid container spacing={3}>
                              <Grid item xs={12} >
                                 <TextField
                                    onChange={(e) => {
                                       setRecordUserPassword(true);
                                       setUserPassword(
                                          e.target.value
                                       );
                                       setUserPasswordCode(checkUserPassword(e.target.value));
                                    }}
                                    error={userPasswordCode > 0}
                                    helperText={setUserPasswordHelperText(userPasswordCode)}
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
                              <Grid item xs={12} >
                                 <TextField
                                    onChange={(e) => {
                                       setRecordConfirmedPassword(true);
                                       setConfirmedPasswordCode(checkPasswordMatch(userPassword, e.target.value));
                                    }}
                                    error={confirmedPasswordCode > 0}
                                    helperText={setPasswordMatchHelperText(confirmedPasswordCode)}
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    id="confirmedPassword"
                                    label="Confirmar contraseña"
                                    variant="outlined"
                                    type={"password"}
                                 />
                              </Grid>
                           </Grid>
                           <Button
                              disabled={isButtonDisabled}
                              onClick={
                                 handleSubmit
                              }
                              type='submit'
                              variant='contained'
                              sx={{
                                 marginTop: 3,
                              }}
                           >
                              Actualizar
                              contraseña
                           </Button>
                        </form>
                     </div>
                  </Container>
               </CardContent>
            </Card>
         </div>
      </Box>
   );
};

export default ForgotPassword;
