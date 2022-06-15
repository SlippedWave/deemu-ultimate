import { Container, Card, CardContent, Divider, Typography } from '@mui/material';
import React from 'react';

const ShowCard = (props) => {
    return (
        <Container >
            <Card >
                <CardContent>
                    <Typography >
                        {props.title}
                    </Typography>
                    <Divider
                        sx={{
                            my: 3
                        }}
                    />
                    <Typography>
                        {props.content}
                    </Typography>
                </CardContent>
            </Card >
        </Container>
    )
}

export default ShowCard;