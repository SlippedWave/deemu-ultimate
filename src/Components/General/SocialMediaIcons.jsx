import { Grid, Box, IconButton } from '@mui/material';
import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SocialMediaIcons () {
    return (
        <Box>
            <Grid 
            item 
            container 
            justifyContent="center" 
            spacing={6}
            >
                <Grid item>
                    <a href='https://www.youtube.com'>
                        <IconButton>
                            <YouTubeIcon />
                        </IconButton>
                    </a>
                </Grid>
                <Grid item>
                    <a href='https://www.facebook.com'>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                    </a>
                </Grid>
                <Grid item>
                    <a href='https://www.twitter.com'>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                    </a>
                </Grid>
                <Grid item>
                    <a href='https://linkedin.com'>
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    </a>
                </Grid>
            </Grid>
        </Box>
    )
}
