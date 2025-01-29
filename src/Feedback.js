import React, { useState } from 'react';
import {
  Button,
  TextField,
  Snackbar,
  Alert,
  Container,
  Typography,
  Box,
  Paper,
} from '@mui/material';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the feedback submission (e.g., send it to an API)
    console.log('Feedback submitted:', feedback);
    setFeedback('');
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Student Feedback
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Feedback"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={feedback}
            onChange={handleFeedbackChange}
            required
            style={{ marginBottom: '20px' }}
          />
          <Box textAlign="right">
            <Button variant="contained" color="primary" type="submit">
              Submit Feedback
            </Button>
          </Box>
        </form>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Feedback submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default FeedbackForm;