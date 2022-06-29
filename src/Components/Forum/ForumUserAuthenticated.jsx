import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { auth } from "../../Firebase/settings"; import MainSection from "./MainSection";
import { Poll } from './Poll.js'

const ForumUserAuthenticated = () => {
    return (
        <Box style={{ paddingTop: '80px' }} >
            <h1 style={{ textAlign: 'center' }} >DEEMU Forum</h1>
            <Poll />

            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <MainSection />
            </div>
        </Box>
    );
}

export default ForumUserAuthenticated;