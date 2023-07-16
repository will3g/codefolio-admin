import * as React from 'react';

import IconButton from '@mui/material/IconButton';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

import MyTextLogoIcon from '../../styles/logo.svg';

import ListIcon from '@mui/icons-material/List';
import AddBoxIcon from '@mui/icons-material/AddBox';

const categories = [
    {
        id: 'Articles',
        children: [
            {
                id: 'List articles',
                icon: <ListIcon />,
                link: '/article/',
                active: false,
            },
            { 
                id: 'New article', 
                icon: <AddBoxIcon />,
                link: '/article/create/',
                active: false,
            },
        ],
    },
    {
        id: 'Portfolios',
        children: [
            { 
                id: 'List portfolios', 
                icon: <ListIcon />,
                link: '/portfolio/',
                active: false,
            },
            { 
                id: 'New portfolio', 
                icon: <AddBoxIcon />,
                link: '/portfolio/create/',
                active: false,
            },
        ],
    },
];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props) {
    const { ...other } = props;

    let currentPath = window.location.pathname;
    
    categories.forEach((category) => {
        category.children.forEach((child) => {
            if (currentPath.includes(child.link)) {
                child.active = true;
            }
        });
    });

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    <IconButton sx={{ width: "100%", height: "100%" }}>
                        <img src={MyTextLogoIcon} alt="Codefolio" width={"100%"} />
                    </IconButton>
                </ListItem>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: '#101F33' }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active, link }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton selected={active} sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <Link href={`${link}`} underline="none">
                                        <ListItemText>{childId}</ListItemText>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}