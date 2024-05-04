// Header.js
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {" "}
        {/* Centering the content */}
        <Typography variant="h6" component="div">
          React GAS Vite App
        </Typography>
        <div>
          {" "}
          {/* Creating a container for the button to align it to the right */}
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/test">
            Test
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
