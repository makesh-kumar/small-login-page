import React from "react";
import {
  AppBar,
  Container,
  Paper,
  Toolbar,
  Typography,
  Grid,
  Item,
} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
function FooterPage() {
  return (
    <div>
      <Paper elevation={8} variant="outlined" square />
      {/* <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))} */}
      {/* </Grid> */}
      {/* <AppBar position="static" variant="outlined" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2019 Gistia
            </Typography>
          </Toolbar>
        </Container>
      </AppBar> */}
    </div>
  );
}

export default FooterPage;
