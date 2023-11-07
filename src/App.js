import React from "react";
import { Container, CssBaseline } from '@mui/material';
import HotelSearchContainer from "./containers/HotelSearchContainer";
import './App.css';

function App() {
  return (
    <Container maxWidth={false}>
      <CssBaseline />
      <div class="nine">
        <h1>Reserve-My-Stay
          <span>A Property Reservation System</span>
        </h1>
      </div>
      {/* Container that wraps search component as well as the result component */}
      <HotelSearchContainer />
    </Container>
  );
}

export default App;
