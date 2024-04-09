import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 400,
        maxWidth: '100%',
      }}
    >
        <form>
        <TextField fullWidth label="Driver_id" id="Driver_id" />
        </form>
        
      
    </Box>
  );
}