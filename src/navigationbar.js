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
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AddBoxRounded,
  SearchOutlined,
  Settings,
  MenuOutlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const ResponsiveBar = (props) => {
  const theme = useTheme();
  const username = "Lucky Katana";
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  // drawer function
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // drawer
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography sx={{ my: 2, color: "black" }}>Taakulo</Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            LinkComponent="a"
            href="/"
            sx={{ textAlign: "start", color: "black" }}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <SearchOutlined sx={{ color: theme.palette.secondary.main }} />
            </ListItemIcon>
            <ListItemButton>
              <Button sx={{ color: theme.palette.secondary.main }}>
                Search
              </Button>
            </ListItemButton>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ListItemIcon>
                <AddBoxRounded color="substitute" />
              </ListItemIcon>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText>{username}</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Settings sx={{ color: theme.palette.secondary.main }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="end"
            sx={{
              marginRight: 2,
              display: { sm: "none" },
            }}
          >
            <MenuOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default ResponsiveBar;
