'use client';

import * as React from 'react';
import { loginAction } from './actions';
import { Box, Button, TextField } from '@mui/material';


export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let [isLoginActionPending, startTransition] = React.useTransition();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    event.stopPropagation();

    // TODO: handle error
    startTransition(() => loginAction(email, password));
  }

  return (
    <Box sx={{
      width: 300,
      height: '80vh',
      margin: 'auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 2
    }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <TextField
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          label="Email address"
          placeholder="Email address"
          variant="filled"
          size="small"
        />
        <br />
        <TextField
          required
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          minRows={8}
          label="Password"
          variant="filled"
          size="small"
        />
        <Button variant="contained" color="primary" disabled={isLoginActionPending} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}