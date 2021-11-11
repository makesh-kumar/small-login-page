import React from "react";
import LoginPage from "./Login/LoginPage";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import "./homePageStyle.css";
import Register from "./Register/Register";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FooterPage from "./FooterPage";
import HeaderPage from "./HeaderPage";
function HomePage() {
  const [alignment, setAlignment] = React.useState("Login");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <HeaderPage />
      {open ? (
        <Alert
          variant="outlined"
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      ) : null}
      <div className="home">
        <div className="toggleContainer">
          <ToggleButtonGroup
            fullWidth={true}
            color="primary"
            value={alignment}
            exclusive
            size="medium"
            onChange={handleChange}
          >
            <ToggleButton value="Login">Login</ToggleButton>
            <ToggleButton value="Register">Register</ToggleButton>
          </ToggleButtonGroup>
        </div>
        {alignment === "Login" ? <LoginPage /> : <Register />}
      </div>
      {/* <FooterPage /> */}
    </>
  );
}

export default HomePage;
