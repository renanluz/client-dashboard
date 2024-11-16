'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    alert('You have been logged out!');
    router.push('/login');
  };

  return (
    <Box position="relative" minHeight="100vh" padding={3}>
      <Box position="absolute" top={16} right={16}>
        <Button
          size='small'  
          variant="outlined"
          color="error"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h3" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to your dashboard!
        </Typography>
        <Box display="flex" gap={2} marginTop={4}>
          <Link href="/clients" passHref>
            <Button variant="contained" color="primary">
              Clients
            </Button>
          </Link>
          <Link href="/suppliers" passHref>
            <Button variant="contained" color="secondary">
              Suppliers
            </Button>
          </Link>
          <Link href="/products" passHref>
            <Button variant="contained" color="success">
              Products
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}