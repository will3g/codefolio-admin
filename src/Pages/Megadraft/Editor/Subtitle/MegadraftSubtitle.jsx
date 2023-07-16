import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MegadraftSubtitle(props) {
  const { cuurentSubtitle, onChange } = props;

  const handleSubtitleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Title"
          defaultValue={cuurentSubtitle || ''}
          variant="standard"
          onChange={handleSubtitleChange}
        />
      </div>
    </Box>
  );
}
