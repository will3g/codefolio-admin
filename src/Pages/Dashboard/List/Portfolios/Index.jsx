import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Navigator from '../../Components/Navigator';
import Content from '../../Components/Content';
import Header from '../../Components/Header';
import InteractiveList from '../../Components/InteractiveList';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © by '}
            <Link color="inherit" href="https://github.com/will3g">
                Will3g
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

let theme = createTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#081627',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                contained: {
                    boxShadow: 'none',
                    '&:active': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    marginLeft: theme.spacing(1),
                },
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: theme.palette.common.white,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: '0 16px',
                    minWidth: 0,
                    padding: 0,
                    [theme.breakpoints.up('md')]: {
                        padding: 0,
                        minWidth: 0,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 4,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(255,255,255,0.15)',
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#4fc3f7',
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: 14,
                    fontWeight: theme.typography.fontWeightMedium,
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    minWidth: 'auto',
                    marginRight: theme.spacing(2),
                    '& svg': {
                        fontSize: 20,
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    width: 32,
                    height: 32,
                },
            },
        },
    },
};

const drawerWidth = 256;

const payload = {
    "data": [
        {
            "uuid": "e3afed0047Ab08059d0fada10f400c1e5",
            "title": "Portfolio 1"
        },
        {
            "uuid": "82eab1b3b0Ad3436aa0ad5e6c4a38c8c0",
            "title": "Portfolio 2"
        },
        {
            "uuid": "46b51ac4a9Ac239663f9ac0a5b8c4f6d4",
            "title": "Portfolio 3"
        },
        {
            "uuid": "a2f791f3c2A7e3930e20fc893a2a9b9de",
            "title": "Portfolio 4"
        },
        {
            "uuid": "dbcf67278dA782a9b3d0e3b0252de40d4",
            "title": "Portfolio 5"
        },
        {
            "uuid": "51d21f4ee6A71db45de2b6f4f6748c01c",
            "title": "Portfolio 6"
        },
        {
            "uuid": "dd4f1b37dbA6f27aa4f4b437156af79ef",
            "title": "Portfolio 7"
        },
        {
            "uuid": "28ad674e28Aa4e4057a6bc808c73886b1",
            "title": "Portfolio 8"
        },
        {
            "uuid": "b43302f6f4A2b33e5be2e9bea54d7e45e",
            "title": "Portfolio 9"
        },
        {
            "uuid": "7e7ebe7d12Ab242eaaf94257a88581b2c",
            "title": "Portfolio 10"
        },
        {
            "uuid": "e3afed0047Ab08059d0fadaasd10f400c1e5",
            "title": "Portfolio 11"
        },
        {
            "uuid": "82eab1b3b0Aasd2d3436aa0ad5e6c4a38c8c0",
            "title": "Portfolio 12"
        },
        {
            "uuid": "46b51ac4a9Aht34c239663f9ac0a5b8c4f6d4",
            "title": "Portfolio 13"
        },
        {
            "uuid": "a2f791f3c2A98fhd7e3930e20fc893a2a9b9de",
            "title": "Portfolio 14"
        },
        {
            "uuid": "dbcf67278dA298h782a9b3d0e3b0252de40d4",
            "title": "Portfolio 15"
        },
        {
            "uuid": "51d21f4ee6A71dbsdfsd45de2b6f4f6748c01c",
            "title": "Portfolio 16"
        },
        {
            "uuid": "dd4f1b37dbA98dsyh96f27aa4f4b437156af79ef",
            "title": "Portfolio 17"
        },
        {
            "uuid": "28ad674e28Asd89ya4e4057a6bc808c73886b1",
            "title": "Portfolio 18"
        },
        {
            "uuid": "b43302f6f4Awed982b33e5be2e9bea54d7e45e",
            "title": "Portfolio 19"
        },
        {
            "uuid": "7e7ebe7d12Awedg98b242eaaf94257a88581b2c",
            "title": "Portfolio 20"
        },
        {
            "uuid": "e3afed0047Asdfg978hsfb08059d0fada10f400c1e5",
            "title": "Portfolio 21"
        },
        {
            "uuid": "82eab1b3b0Ad3436aa0ad9sedfghy785e6c4a38c8c0",
            "title": "Portfolio 22"
        },
        {
            "uuid": "46b51ac4a9A9h8sdfgc239663f9ac0a5b8c4f6d4",
            "title": "Portfolio 23"
        },
        {
            "uuid": "a2f791f3c2A89ywedfg7e3930e20fc893a2a9b9de",
            "title": "Portfolio 24"
        },
        {
            "uuid": "dbcf67278dA978sdghef782a9b3d0e3b0252de40d4",
            "title": "Portfolio 25"
        },
    ],
    "total": 25,
    "currentPage": 1,
    "perPage": 25
}

export default function Portfolios() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                <CssBaseline />
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                >
                    {isSmUp ? null : (
                        <Navigator
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                        />
                    )}

                    <Navigator
                        PaperProps={{ style: { width: drawerWidth } }}
                        sx={{ display: { sm: 'block', xs: 'none' } }}
                    />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Header onDrawerToggle={handleDrawerToggle} />
                    <Box component="main" sx={{ flex: 1, py: 3, px: 1, bgcolor: '#eaeff1' }}>
                        <Content currentContent={
                            <InteractiveList payload={payload} />
                        } />
                    </Box>
                    <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                        <Copyright />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}