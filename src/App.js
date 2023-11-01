import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { Container, Typography, CssBaseline } from '@mui/material';
import HotelSearchContainer from "./containers/HotelSearchContainer";
import { BrowserRouter as Router } from "react-router-dom";
import { Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './App.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function App() {
  const [collapse, setCollapse] = useState(true);
  return (
    <Router>
      <Container className="container">
        <CssBaseline />
        <Typography variant="h4" align="center" mt={3}>
          Hotel Reservation System
          <ExpandMore
            expand={collapse}
            onClick={() => setCollapse(!collapse)}
            aria-expanded={collapse}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Typography>
        <Collapse in={collapse} timeout="auto" unmountOnExit>
          <HotelSearchContainer collapse={collapse} setCollapse={setCollapse} />
        </Collapse>
      </Container>
    </Router>
  );
}

export default App;
