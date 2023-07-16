import * as React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

function renderRow(payload, props) {
    const { index, style } = props;

    const data = payload.data;

    return (
        <ListItem key={index} component="div" disablePadding>
            <Link underline="none" style={style} href={`${data[index].uuid}`}>
                <ListItemButton>
                    <ListItemText primary={data[index].title} />
                </ListItemButton>
            </Link>
        </ListItem>
    );
}

export default function InteractiveList(props) {
    const { payload } = props;

    return (
        <Box sx={{ width: '100%', height: '75vh', bgcolor: 'background.paper' }}>
            <AutoSizer>
                {({ height, width }) => (
                    <List
                        height={height}
                        itemCount={payload.data.length}
                        itemSize={45}
                        width={width}
                    >
                        {props => renderRow(payload, props)}
                    </List>
                )}
            </AutoSizer>
        </Box>
    );
}
