import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import goToTop from "../Helpers/goToTop";
import NavBar from "../Components/NavBar/NavBar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux"
import { signUpAPI } from "../store/actions"

import {
  checkPasswordMatch,
  checkUserAge,
  checkUserEmail,
  checkUserFirstName,
  checkUserLastName,
  checkUserPassword
} from '../Helpers/checkInputs'
import {
  setPasswordMatchHelperText,
  setUserAgeHelperText,
  setUserEmailHelperText,
  setUserFirstNameHelperText,
  setUserLastNameHelperText,
  setUserPasswordHelperText
} from '../Helpers/setHelperText'

const SignUp = () => {

  const dispatch = useDispatch()

  const [userAge, setUserAge] = React.useState('');
  const [userFirstName, setUserFirstName] = React.useState('');
  const [userLastName, setUserLastName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  const [userAgeCode, setUserAgeCode] = React.useState(0);
  const [userFirstNameCode, setUserFirstNameCode] = React.useState(0);
  const [userLastNameCode, setUserLastNameCode] = React.useState(0);
  const [userEmailCode, setUserEmailCode] = React.useState(0);
  const [userPasswordCode, setUserPasswordCode] = React.useState(0);
  const [confirmedPasswordCode, setConfirmedPasswordCode] = React.useState(0);

  const [recordUserAge, setRecordUserAge] = React.useState(false)
  const [recordUserFirstName, setRecordUserFirstName] = React.useState(false);
  const [recordUserLastName, setRecordUserLastName] = React.useState(false);
  const [recordUserEmail, setRecordUserEmail] = React.useState(false);
  const [recordUserPassword, setRecordUserPassword] = React.useState(false);
  const [recordConfirmedPassword, setRecordConfirmedPassword] = React.useState(false);
 
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, disableButton] = useState(true);

  const [showPassword, setPasswordVisibility] = React.useState(false);

  const handleClickShowPassword = () => setPasswordVisibility(!showPassword);
  const handleMouseDownPassword = (event) => { event.preventDefault(); };

  useEffect(() => {
    goToTop();
  }, []);

  useEffect(() => {
    if (userFirstNameCode === 0 &&
      userLastNameCode === 0 && userAgeCode === 0 &&
      userEmailCode === 0 && userPasswordCode === 0 &&
      confirmedPasswordCode === 0 && !loading && recordUserAge &&
      recordConfirmedPassword && recordUserEmail && recordUserFirstName &&
      recordUserLastName && recordUserPassword) {
      disableButton(false);
    }
    else {
      disableButton(true);
    }

  }, [
    recordUserAge,
    recordConfirmedPassword,
    recordUserFirstName,
    recordUserLastName,
    recordUserEmail,
    recordUserPassword,
    userFirstNameCode,
    userLastNameCode,
    userAgeCode,
    userEmailCode,
    userPasswordCode,
    confirmedPasswordCode,
    loading
  ]);


  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    dispatch(
      signUpAPI(userEmail, userPassword, userFirstName, userLastName, userAge)
    );
    setLoading(false);

  }

  return (
    <Box>
      <NavBar />
      <Box
        maxWidth="lg"
        component={Container}
        mt={5}
        sx={{
          display: "flex",
          justifyContent: "center !important",
          width: "100%",
          marginTop: "100px",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "30px",
                    padding: "30px 0px",
                  }}
                >
                  <Typography variant="h6">
                    ¡Haz tu DEEMU Account hoy!
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          onChange={(e) => {
                            setRecordUserFirstName(true);
                            setUserFirstName(e.target.value);
                            setUserFirstNameCode(checkUserFirstName(e.target.value));
                          }}
                          error={userFirstNameCode > 0}
                          helperText={setUserFirstNameHelperText(userFirstNameCode)}
                          required
                          fullWidth
                          id="userFirstNameRef"
                          label="Nombre(s)"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          onChange={(e) => {
                            setRecordUserLastName(true);
                            setUserLastName(e.target.value);
                            setUserLastNameCode(checkUserLastName(e.target.value));
                          }}
                          error={userLastNameCode > 0}
                          helperText={setUserLastNameHelperText(userLastNameCode)}
                          required
                          fullWidth
                          id="userLastNameRef"
                          label="Apellido"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          onChange={(e) => {
                            setRecordUserAge(true);
                            setUserAge(e.target.value);
                            setUserAgeCode(checkUserAge(e.target.value));
                          }}
                          error={userAgeCode > 0}
                          helperText={setUserAgeHelperText(userAgeCode)}
                          required
                          fullWidth
                          type="number"
                          id="userAgeRef"
                          label="Edad"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          onChange={(e) => {
                            setRecordUserEmail(true);
                            setUserEmail(e.target.value);
                            setUserEmailCode(checkUserEmail(e.target.value));
                          }}
                          error={userEmailCode > 0}
                          helperText={setUserEmailHelperText(userEmailCode)}
                          required
                          fullWidth
                          id="userEmail"
                          label="Correo"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          onChange={(e) => {
                            setRecordUserPassword(true);
                            setUserPassword(e.target.value);
                            setUserPasswordCode(checkUserPassword(e.target.value));
                          }}
                          error={userPasswordCode > 0}
                          helperText={setUserPasswordHelperText(userPasswordCode)}
                          required
                          fullWidth
                          autoComplete="off"
                          id="userPassword"
                          label="Contraseña"
                          variant="outlined"
                          type={showPassword ? "text" : "password"}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
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
                        <TextField
                          onChange={(e) => {
                            setRecordConfirmedPassword(true);
                            setConfirmedPasswordCode(checkPasswordMatch(userPassword, e.target.value))
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
                      <Grid item xs={12}>
                        <Button
                          disabled={isButtonDisabled}
                          onClick={handleSubmit}
                          type="submit"
                        >
                          Registrarse
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                  <Divider />
                  <Typography>
                    ¿Ya tienes una cuenta? Inicia sesión{" "}
                    <Link to="/foro">aquí</Link>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUp;
