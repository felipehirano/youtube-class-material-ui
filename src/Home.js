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
    ListSubheader,
    Grid,
    Switch

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
import { useTheme } from '@material-ui/core/styles';


// Arrow function com o makeStyles recupera tudo o que está no theme(definido no app.js).
const useStyles = makeStyles((theme) => ({
    root: { 
      height: '100vh',
      backgroundColor: theme.palette.background.body
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

const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
  ];

function Home({ darkMode, setDarkMode }) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <Box>
                <AppBar color="inherit" className={classes.appBar}> 
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuIcon}
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <img
                            src={
                            theme.palette.type === 'dark'
                                ? '/images/branco.png'
                                : '/images/preto.png'
                            }
                            alt='logo'
                            className={classes.logo}
                        />
                        <div className={classes.grow}/>
                        <Switch 
                            value={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                            className={classes.icons}
                        />
                        <IconButton
                            className={classes.icons}
                        >
                            <VideoCall />
                        </IconButton>
                        <IconButton
                            className={classes.icons}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <IconButton
                            className={classes.icons}
                        >
                            <AppsIcon />
                        </IconButton>
                        <Button startIcon={<AccountCircleIcon />} variant="outlined" color="secondary">Fazer Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box display="flex">
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
                </Box>
                <Box p={8}>
                    <Toolbar />
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        style={{ fontWeight: 600}}
                    >
                        Recomendados
                    </Typography>
                    <Grid container spacing={4}>
                        {
                            videos.map( (item,index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'
                                            >
                                            {item.title}
                                            </Typography>
                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                                >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} • ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>

                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>

            </Box>
        </div>
    )
}

export default Home;
