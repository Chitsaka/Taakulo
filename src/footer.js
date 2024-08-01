import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Facebook, X, YouTube } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
  Container,
} from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <>
      <Container sx={{ justifyContent: "center", textAlign: "center" }}>
        <Grid
          container
          spacing={2}
          padding={5}
          bgcolor={theme.palette.background.paper}
        >
          <Grid item xs={6} md={3}>
            <Grid item>
              <Typography
                variant="h5"
                sx={{ color: theme.palette.substitute.main }}
              >
                Taakulo
              </Typography>
            </Grid>
            <Grid item mt={2}>
              <Typography variant="p">Lorem Ipsum</Typography>
            </Grid>
            <Grid item py={3}>
              <Button variant="contained" color="substitute">
                Button Text
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={6} md={3}>
            <Grid item>
              <Typography variant="h8">Lorem Ipsum</Typography>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
          </Grid>
          <Grid item xs={6} md={3}>
            <Grid item>
              <Typography variant="h8">Learn More</Typography>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
          </Grid>
          <Grid item xs={6} md={3}>
            <Grid item>
              <Typography variant="h8">Lorem Ipsum</Typography>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
            <Grid item>
              <Link to="/">Lorem Ipsum</Link>
            </Grid>
          </Grid>

          <Divider
            orientation="horizontal"
            flexItem
            sx={{ my: 3 }}
            style={{ width: "100%" }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={5}
          >
            <Box display="flex" alignItems="center">
              <Typography mr={2} variant="p" align="center" sx={{ xs: 12 }}>
                © 2024 Taakulo
              </Typography>
              <Typography mr={3}>T&Cs</Typography>
              <Typography mr={3}>Privacy</Typography>
              <Typography mr={3}>Logo</Typography>
            </Box>
            <Box position={"absolute"} textAlign={"center"} right={"20%"}>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <YouTube />
              </IconButton>
              <IconButton>
                <img src={require("./icons/number-8.png")} alt="WeAre8" />
              </IconButton>
              <IconButton>
                <X />
              </IconButton>
              <IconButton>
                <img src={require("./icons/tik-tok.png")} alt="tiktok" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
