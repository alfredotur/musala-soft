import { useState, useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './css/dashboard.css';
import {
    AppBar,
    Button,
    CardMedia,
    Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Tooltip, Typography
} from '@mui/material';
import { Close } from '@mui/icons-material';

import './css/dashboard.css';
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import Loader from "../components/loader";
import iconLogout from '../static/images/iconos/Iconos SVG/ICONOS_Salir BLANCO.svg';
import { Menu, Person, Group } from '@mui/icons-material';

export default function Dashboard({ children }) {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [DrawerWidth, setDrawerWidth] = useState(400);

    let estadoDraweraction = localStorage.getItem('draweraction');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selector = useSelector(store => store)

    useEffect(() => {
        if (window.screen.width < 568) {
            setDrawerWidth(window.screen.width);
        }
    }, [window.screen.width]);

    const logoutUser = () => {
        navigate('/', { replace: true })
    };

    const handleDrawerOpen = () => {
        setOpenDrawer(!openDrawer);
        if (openDrawer == true) {
            localStorage.setItem('draweraction', 0);
        } else {
            localStorage.setItem('draweraction', -1);
        }
    };

    const clickOpenDrawer = () => {
        setOpenDrawer(true);
    }

    const closeMenu = () => {
        setOpenDrawer(false);
    }

    const clickGateway = () => {
        navigate('/gateway', { replace: true });
    }

    const clickPeripheral = () => {
        navigate('/peripheral', { replace: true });
    }

    const clickInicio = () => {
        navigate('/home', { replace: true });
    }


    return (
        <div className='root_dashboard'>
            <CssBaseline />

            {/* <HeaderBar /> */}
            <Box>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}
                            onClick={clickOpenDrawer}>
                            <Menu />
                        </IconButton>

                        <Button color='inherit' size='small' onClick={clickInicio}>
                            Musala
                        </Button>

                        <Typography className='titulo_header' component='div' sx={{ flexGrow: 1 }}>

                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* <NavigationMenu /> */}
            <Drawer sx={{
                width: DrawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {
                    width: DrawerWidth,
                    boxSizing: 'border-box',
                },
            }} open={openDrawer} variant={"temporary"} anchor={"left"}>
                <div>
                    <Grid container mt={3} className={"headerDrawer"}>
                        <Tooltip title={"Cerrar"}>
                            <IconButton onClick={closeMenu}>
                                <Close className={"icon"} />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid container mt={2} className="containerMenuOpciones">
                        <Typography className="textoMenuOpciones">
                            OPTIONS
                        </Typography>
                    </Grid>
                </div>
                <Divider />

                {/*mostrar los servicios del cliente*/}
                <List>
                    <ListItem button onClick={clickGateway}>
                        
                        <ListItemText>
                            <Typography className='color-texto-menu'>
                                Gateway
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />

                    <ListItem button onClick={clickPeripheral}>
                        
                        <ListItemText>
                            <Typography className='color-texto-menu'>
                                Peripheral
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>

            {/* Contenido a mostrar */}
            <Grid container>
                <main className='content-dashboard'>
                    <div>
                        <Container maxWidth={"xl"} className='container_dashboard'>
                            <Suspense fallback={<Loader />}>
                                <Grid container>
                                    {children}
                                </Grid>
                            </Suspense>
                            <Box pt={4}>

                            </Box>
                        </Container>
                    </div>
                </main>
            </Grid>
        </div>
    );
}