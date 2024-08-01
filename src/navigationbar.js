import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Divider,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  AddBoxRounded,
  SearchOutlined,
  Settings,
  MenuOutlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";

const ResponsiveBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const username = "Lucky Katana";

  // drawer function
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar color="primary" position="sticky" component="nav">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h3"
              sx={{ color: theme.palette.substitute.main }}
            >
              Taakulo
            </Typography>
          </Box>
          {isSmallScreen ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuOutlined />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <Typography
                  variant="h5"
                  sx={{ color: theme.palette.secondary.main }}
                  textAlign={"center"}
                >
                  Taakulo
                </Typography>
                <Divider />
                <MenuItem onClick={handleMenuClose}>
                  <IconButton>
                    <SearchOutlined
                      sx={{ color: theme.palette.secondary.main }}
                    />
                    <Button sx={{ color: theme.palette.secondary.main }}>
                      Search
                    </Button>
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <IconButton>
                    <AddBoxRounded color="substitute" />
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <IconButton>
                    <Avatar />
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                        marginLeft: 1,
                      }}
                    >
                      {username}
                    </Typography>
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <IconButton>
                    <Settings sx={{ color: theme.palette.secondary.main }} />
                  </IconButton>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton>
                <SearchOutlined sx={{ color: theme.palette.secondary.main }} />
                <Button sx={{ color: theme.palette.secondary.main }}>
                  Search
                </Button>
              </IconButton>
              <IconButton>
                <AddBoxRounded color="substitute" />
              </IconButton>
              <IconButton>
                <Avatar />
                <Typography
                  sx={{ color: theme.palette.secondary.main, marginLeft: 1 }}
                >
                  {username}
                </Typography>
              </IconButton>
              <IconButton>
                <Settings sx={{ color: theme.palette.secondary.main }} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ResponsiveBar;
