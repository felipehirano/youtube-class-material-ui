import React from 'react';
import { 
    makeStyles, 
    Box, 
    AppBar, 
    Toolbar, 
    IconButton, 
    Button, 
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    ListSubheader

} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import { Subscriptions, Whatshot } from '@material-ui/icons';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import AddCircle from '@mui/icons-material/AddCircle';


// Arrow function com o makeStyles recupera tudo o que está no theme(definido no app.js).
const useStyles = makeStyles((theme) => ({
    root: { 
      height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    logo: {
        height: 25,
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    icons: {
        paddingRight: theme.spacing(5),
    },
    grow: {
        flexGrow: 1,
    },
    listItemText: {
        fontSize: 14
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    subheader: {
        textTransform: 'uppercase'
    }
}))

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box>
                <AppBar color="inherit" className={classes.appBar}> 
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuIcon}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src="/images/preto.png" alt="logo" className={classes.logo} />
                        <div className={classes.grow}/>
                        <IconButton
                            className={classes.icons}
                            color="inherit"
                        >
                            <VideoCall />
                        </IconButton>
                        <IconButton
                            className={classes.icons}
                            color="inherit"
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <IconButton
                            className={classes.icons}
                            color="inherit"
                        >
                            <AppsIcon />
                        </IconButton>
                        <Button startIcon={<AccountCircleIcon />} variant="outlined" color="secondary">Fazer Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box display="flex">
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <Box>
                        <List>
                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                <ListItemText  
                                    primary={'Ínicio'} 
                                    classes={{ 
                                        primary: classes.listItemText 
                                        }}
                                    />
                            </ListItem>
                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon>{<Whatshot />}</ListItemIcon>
                                <ListItemText  
                                    primary={'Em Alta'} 
                                    classes={{ 
                                        primary: classes.listItemText 
                                        }}
                                    />
                            </ListItem>
                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                                <ListItemText  
                                    primary={'Inscrições'} 
                                    classes={{ 
                                        primary: classes.listItemText 
                                        }}
                                    />
                            </ListItem>
                        </List>
                        <Divider />
                    </Box>
                    <Box> 
                    <List>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                            <ListItemText  
                                primary={'Biblioteca'} 
                                classes={{ 
                                    primary: classes.listItemText 
                                }}
                                />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                            <ListItemText  
                                primary={'Histórico'} 
                                classes={{ 
                                    primary: classes.listItemText 
                                }}
                                />
                        </ListItem>
                    </List>
                    <Divider />
                    </Box>
                    <Box p={7}>
                        <Typography variant="body2">
                            Faça login para curtir vídeos, comentar e se inscrever.
                        </Typography>
                        <Box mt={2}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                startIcon={<AccountCircleIcon />}
                            >
                                Fazer login
                            </Button>
                        </Box>
                    </Box>
                    <Divider />
                    <Box>
                        <List
                            component='nav'
                            aria-labelledby='nested-list-subheader'
                            subheader={
                            <ListSubheader
                                component='div'
                                id='nested-list-subheader'
                                className={classes.subheader}
                            >
                                O Melhor do youtube
                            </ListSubheader>
                            }
                        >
                            <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                primary: classes.listItemText,
                                }}
                                primary={'Música'}
                            />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                primary: classes.listItemText,
                                }}
                                primary={'Esportes'}
                            />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                primary: classes.listItemText,
                                }}
                                primary={'Jogos'}
                            />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                primary: classes.listItemText,
                                }}
                                primary={'Filmes'}
                            />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                primary: classes.listItemText,
                                }}
                                primary={'Notícias'}
                            />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                primary: classes.listItemText,
                                }}
                                primary={'Ao vivo'}
                            />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                primary: classes.listItemText,
                                }}
                                primary={'Destaques'}
                            />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                primary: classes.listItemText,
                                }}
                                primary={'Videos 360'}
                            />
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
                <Box p={8}>
                    <Toolbar />
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        style={{ fontWeight: 600}}
                    >
                        Recomendados
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Home;
