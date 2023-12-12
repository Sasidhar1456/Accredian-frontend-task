// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, Typography, Button, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="app-container">
      <div className="login-section">
        <Typography variant="h4" align="center" gutterBottom>
          {isSignUp ? 'Sign Up' : 'Login'}
        </Typography>
        <FormControl fullWidth>
          {isSignUp && (
            <TextField label="Username" variant="outlined" margin="normal" required fullWidth />
          )}
          <TextField label="Email" variant="outlined" margin="normal" required fullWidth />
          <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {isSignUp && (
            <TextField
              label="Confirm Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              required
              fullWidth
            />
          )}
          <Button variant="contained" color="primary" fullWidth>
            {isSignUp ? 'Sign Up' : 'Login'}
          </Button>
          <Typography align="center" style={{ marginTop: '1rem' }}>
            <Button color="primary" onClick={handleToggleForm}>
              {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
            </Button>
          </Typography>
        </FormControl>
      </div>
    </Container>
  );
};

export default App;






