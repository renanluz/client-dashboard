'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Client Dashboard!
      </Typography>
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
    </div>
  );
}