import React, { Fragment } from 'react'
import { ListItem, Typography, Paper, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import panels from './CourseBarContent';

const CourseBar = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Fragment>
            <CssBaseline />
            <Paper square={false} elevation={5}>
                <Box>
                    {panels.map((panel, i) => (
                        <Accordion
                            disableGutters
                            expanded={expanded === panel.panel}
                            onChange={handleChange(panel.panel)}
                            key={i}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={panel.ariaControl}
                                id={panel.idHeader}
                            >
                                <Typography variant="h7">
                                    <Typography variant="body2" color="text.secondary">
                                        {panel.chapter}
                                    </Typography>
                                    {panel.title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                {panel.content.map((chapter, i) => (
                                    <ListItem
                                        button
                                        component={Link}
                                        key={chapter.title}
                                        to={chapter.link}
                                    >
                                        <Typography variant="body2" color="text.secondary">
                                            {chapter.title}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Paper >
        </Fragment >
    )
}

export default CourseBar;