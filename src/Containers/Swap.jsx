import {
    Typography,
    Container,
    Button,
    Card,
    Divider,
    Grid,
} from '@mui/material';
import { HashLink } from 'react-router-hash-link';

import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import SocialMediaIcons from '../Components/General/SocialMediaIcons';
import CryptoImg from '../Assets/Swap/SWAP.png';
import goToTop from '../Helpers/goToTop';

const Swap = () => {
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
                >
                    <Grid
                        item
                        md={7}
                        sm={12}
                        sx={{ marginTop: '10%' }}
                    >
                        <Typography variant='h3'>
                            ¿Cómo comprar DMU?
                        </Typography>
                        <Typography
                            variant='h4'
                            sx={{ mt: 4 }}
                        >
                            Resuelve aquí todas tus dudas de
                            cómo usar DEEMU Swap
                        </Typography>

                        <Button
                            component={HashLink}
                            smooth
                            to='#tutorial'
                            sx={{ marginTop: '40px' }}
                            variant='contained'
                        >
                            <Typography>
                                Ir al tutorial
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item md={5} sm={12}>
                        <img
                            src={CryptoImg}
                            alt='arcade'
                            style={{
                                width: '100%',
                                minWidth: '350px',
                            }}
                        />
                    </Grid>
                </Grid>

                <Box
                    id='tutorial'
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        width: '100%',
                        alignItems: 'center',
                        gap: '30px',
                    }}
                >
                    <Typography variant='h4'>
                        ¿Cómo comprar DMU?
                    </Typography>
                    <Box
                        component={Card}
                        sx={{
                            padding: '30px',
                            flexDirection: 'row',
                            textAlign: 'left',
                            width: '80%'
                        }}
                    >
                        <Typography variant='h5'>
                            Paso 1. Conecta tu cartera al DEEMU Swap mediante
                            Metamask.
                        </Typography>
                        <Typography>
                            En la parte superior derecha de la página encontrarás un botón
                            que al presionarlo desplegará una ventana para conectar tu cartera.
                        </Typography>
                    </Box>
                    <Box
                        component={Card}
                        sx={{
                            padding: '30px',
                            flexDirection: 'row',
                            textAlign: 'left',
                            width: '80%'
                        }}
                    >
                        <Typography variant='h5'>
                            Paso 2. Confirma el acceso de DEEMU Swap a tu cartera.
                        </Typography>
                        <Typography>
                            En la ventana aparecerá una solicitud de confirmación de acceso por parte de 
                            DEEMU Swap a tu cuenta de Metamask. Tú debes de hacer click en Aceptar.
                        </Typography>
                    </Box>
                    <Box
                        component={Card}
                        sx={{
                            padding: '30px',
                            flexDirection: 'row',
                            textAlign: 'left',
                            width: '80%'
                        }}
                    >
                        <Typography variant='h5'>
                            Paso 3. Ingresa la cantidad de la moneda que buscas.
                        </Typography>
                        <Typography>
                            Ingresa la cantidad de la crypto que buscas.
                        </Typography>
                    </Box>
                    <Box
                        component={Card}
                        sx={{
                            padding: '30px',
                            flexDirection: 'row',
                            textAlign: 'left',
                            width: '80%'
                        }}
                    >
                        <Typography variant='h5'>
                            Paso 4. Ejecuta la transacción.
                        </Typography>
                        <Typography>
                            Antes que nada, revisa que los números arrojados por DEEMU Swap te parezcan
                            correctos y después haz click en el botón Cambiar.
                        </Typography>
                    </Box>
                    <Box
                        component={Card}
                        sx={{
                            padding: '30px',
                            flexDirection: 'row',
                            textAlign: 'left',
                            width: '80%'
                        }}
                    >
                        <Typography variant='h5'>
                            Paso 5. Confirma la transacción.
                        </Typography>
                        <Typography>
                            Después de presionar el botón cambiar aparecerá una ventana de Metamask con la información
                            de la transacción, revisa que los datos coincidan con los arrojados por DEEMU Swap y confirma la
                            ejecución del contrato.
                        </Typography>
                    </Box>
                    <Box
                        component={Card}
                        sx={{
                            padding: '30px',
                            flexDirection: 'row',
                            textAlign: 'left',
                            width: '80%'
                        }}
                    >
                        <Typography variant='h5'>
                            Paso 6. Espera.
                        </Typography>
                        <Typography>
                            Las transacciones pueden tardar un poco en verse reflejadas en tu cartera. Debes ser paciente.
                        </Typography>
                    </Box>

                    <Typography variant='h4'> Accede a DEEMU Swap </Typography>
                    <Typography>
                        Pareces estar list@ para cambiar el mundo. Para ingresar a DEEMU Swap 
                        haz click en <a href='https://dexmu.vercel.app/'>comprar token</a>.
                    </Typography>

                    <Typography variant='h4'> ¿Quieres manejar el contrato a tu gusto? </Typography>
                    <Typography>
                        Para acceder al explorador de bloques de nuestra token DMU,
                        haz click en <a href='https://bscscan.com/address/0xbb0aca21ae4860ab9e52c36d5a571a431280e6ca#readContract'>explorador de bloques</a>.
                    </Typography>
                </Box>


                <Box>
                    <Divider />
                    <SocialMediaIcons />
                </Box>
            </Box>
        </Box >
    );
};

export default Swap;
