import {
    Button,
    Container,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import goToTop from '../Helpers/goToTop';

const NotFoundPage = () => {
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
                        404
                    </Typography>
                    <Typography
                        variant='h5'
                        sx={{ mt: 4 }}
                    >
                        Contenido no encontrado.
                    </Typography>
                </Box>
                <Typography>
                    <Button
                        variant='contained'
                        component={Link}
                        to={'/'}

                    >
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"

                        >
                            Regresar al sitio
                        </Typography>
                    </Button>
                </Typography>
            </Box>
        </Box>
    );
};
export default NotFoundPage;

