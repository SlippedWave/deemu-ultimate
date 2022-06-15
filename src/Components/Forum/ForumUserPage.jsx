import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { auth } from "../../Firebase/settings";
import ForumUserNoAuthenticated from "./ForumUserNoAuthenticated";
import ForumUserAuthenticated from "./ForumUserAuthenticated";

const ForumUserPage = () => {
    return (
        <Box>
            {auth.currentUser.emailVerified  ? <ForumUserAuthenticated /> : <ForumUserNoAuthenticated />}
        </Box>

    );
}

export default ForumUserPage;