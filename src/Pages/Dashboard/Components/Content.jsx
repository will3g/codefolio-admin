import * as React from 'react';

import Paper from '@mui/material/Paper';

export default function Content(props) {
    return (
        <React.Fragment>
            <Paper sx={{ maxWidth: '90%', margin: 'auto', overflow: 'hidden', color: 'primary' }}>
                {props.currentContent}
            </Paper>
        </React.Fragment>
    );
}