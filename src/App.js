import React from "react";
import { Container, Typography, CssBaseline, Divider } from '@mui/material';
import HotelSearchContainer from "./containers/HotelSearchContainer";
import './App.css';

function App() {
  return (
    <Container className="container" maxWidth="sm">
      <CssBaseline />
      <Typography variant="h3" align="center" mt={3}>
        Hotel Reservation System
      </Typography>
      <Divider />
      {/* Container that wraps search component as well as the result component */}
      <HotelSearchContainer />
    </Container>
  );
}

export default App;
