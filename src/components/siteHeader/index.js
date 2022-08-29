import React, { useState } from "react";
// import makeStyles from '@mui/styles/makeStyles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate, NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
  title: {
    flexGrow: 1,
  },
  appbar: {
    // background: 'none',
  },
    inactiveLink: {
    color: 'white',
    padding : 1,
    fontSize: '1.5rem'
  },
  activeLink: {
    color: 'black',
    padding : 1,
    fontSize: '1.5rem',
    background: "#bfbfbf"
  }
};

const SiteHeader = () => {
  // const classes = useStyles();
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const open = Boolean(anchorEl);
  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favourites", path: "/movies/favourites" },
    { label: "Option 3", path: "/" },
    { label: "Option 4", path: "/" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return <>
    <AppBar sx={styles.appbar}
    position="fixed" elevation={0} color='primary'> 
      <Toolbar>
        <Typography variant="h4" sx={styles.title}>
          TMDB Client
        </Typography>
        <Typography variant="h6" sx={styles.title}>
          All you ever wanted to know about Movies!
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              size="large">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              {menuOptions.map((opt) => (
                <MenuItem
                  key={opt.label}
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            {menuOptions.map((opt) => (
              <NavLink
                key={opt.label}
                to={opt.path}
                sx={({ isActive }) =>
                isActive ? styles.activeLink : styles.inactiveLink
              }
                color="inherit"
                // onClick={() => handleMenuSelect(opt.path)}
              >
                {opt.label}
              </NavLink> 
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  </>;
};

export default SiteHeader;