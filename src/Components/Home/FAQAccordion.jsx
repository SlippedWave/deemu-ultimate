import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import {
   AccordionContent1,
   AccordionContent2,
   AccordionContent3,
   AccordionContent4,
} from '../../Assets/Start/AccordionTexts';

const FAQAccordion = () => {
   return (
      <Box
         maxWidth={'lg'}
         style={{
            display: 'flex',
            flexDirection: 'column',
         }}
      >
         <Accordion>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel1-content'
               id='panel1-header'
            >
               <Typography>
                  {AccordionContent1.summary}
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Box>
                  <Grid container>
                     <Grid
                        item
                        xs={12}
                        sm={6}
                        md={8}
                     >
                        <Typography>
                           {
                              AccordionContent1.content
                           }
                        </Typography>
                     </Grid>
                     <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                     >
                        <Box>
                           <img
                              src={
                                 AccordionContent1.img
                              }
                              alt='chart'
                              width={'100%'}
                           />
                        </Box>
                     </Grid>
                  </Grid>
               </Box>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel2-content'
               id='panel2-header'
            >
               <Typography>
                  {AccordionContent2.summary}
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  {AccordionContent2.content}
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel3-content'
               id='panel3-header'
            >
               <Typography>
                  {AccordionContent3.summary}
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  {AccordionContent3.content}
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel4-content'
               id='panel4-header'
            >
               <Typography>
                  {AccordionContent4.summary}
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  {AccordionContent4.content}
               </Typography>
               <Link to={AccordionContent4.link}>
                  <Typography>
                     {AccordionContent4.linkTypo}
                  </Typography>
               </Link>
            </AccordionDetails>
         </Accordion>
      </Box>
   );
};

export default FAQAccordion;
