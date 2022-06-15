import { Box } from "@mui/system";
import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import IsLogged from "../Firebase/IsLogged";
import ForumUserPage from "../Components/Forum/ForumUserPage"
import ForumNoUserPage from "../Components/Forum/ForumNoUserPage";


const Forum = () => {
    return (
        <Box >
            <NavBar />
            <IsLogged logged={<ForumUserPage />} notLogged={<ForumNoUserPage />} />
        </Box>
    );
}

export default Forum;