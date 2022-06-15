import { LinearProgress } from "@mui/material";
import React, { Fragment } from "react";
import { useAuthState } from 'react-firebase-hooks/auth'
import { toastError } from "../Helpers/alerts";
import { auth } from "./settings";

const IsLogged = (props) => {
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return (
            <LinearProgress />
        );
    }
    else if (error) {
        return (
            toastError('Error en la carga de datos del usuario.')
        );
    }
    else if (user) {
        return (
            <Fragment>{props.logged}</Fragment>
        );
    }
    else {
        return (
            <Fragment>{props.notLogged}</Fragment>
        );
    }
}

export default IsLogged;