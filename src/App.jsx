// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, Typography, Button, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Validate form fields
    if (!formData.email || !formData.password || (isSignUp && (!formData.username || !formData.confirmPassword))) {
      alert('All fields are required!');
      return;
    }

    // Perform login or signup logic here
    if (isSignUp) {
      // Handle signup
      alert('Sign up successful!');
    } else {
      // Handle login
      alert('Login successful!');
    }
  };

  return (
    <Container className="app-container">
      <div className="login-section">
        <Typography variant="h4" align="center" gutterBottom>
          {isSignUp ? 'Sign Up' : 'Login'}
        </Typography>
        <FormControl fullWidth>
          {isSignUp && (
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={formData.username}
              onChange={handleChange('username')}
            />
          )}
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={formData.email}
            onChange={handleChange('email')}
          />
          <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            required
            fullWidth
            value={formData.password}
            onChange={handleChange('password')}
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
              value={formData.confirmPassword}
              onChange={handleChange('confirmPassword')}
            />
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            style={{ margin: '1rem 0', textTransform: 'none' }} // Added textTransform and margin styles
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </Button>
          <Typography align="center">
            <Button
              
              onClick={handleToggleForm}
              
            >
              {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
            </Button>
          </Typography>
        </FormControl>
      </div>
    </Container>
  );
};

export default App;









