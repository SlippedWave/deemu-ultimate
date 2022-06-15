import React from "react";
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { Box } from "@mui/system";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { signOutAPI } from "../../store/actions";
import { useDispatch } from "react-redux";

const UserSettings = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const dispatch= useDispatch();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Mi DEEMMU Account">
                <IconButton
                    onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem
                    component={Link}
                    to={'/actualizar-contrasena'}
                >
                    <Typography textAlign="center">Actualizar contraseña</Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        dispatch(signOutAPI())
                    }}
                >
                    <Typography textAlign="center">Cerrar sesión</Typography>
                </MenuItem>

            </Menu>
        </Box>
    )
}

export default UserSettings;