import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Item from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";

const Homepage = () => {
  const theme = useTheme();
  const setProgress = useState(50);

  const handleProgressChange = (event) => {
    const value = event.target.value;
    if (value >= 0 && value <= 100) {
      setProgress(value);
    }
  };

  return (
    <>
      <Box
        height={"200px"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        sx={{
          backgroundImage: `url(${require("../images/a_plant_in_a_glass_jar.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h4"
          color="white"
          position="absolute"
          bottom={"20%"}
          sx={{
            padding: "10px 20px",
          }}
        >
          Give a Little, Change a Lot
        </Typography>
      </Box>
      <Container>
        <Typography variant="h3" textAlign={"center"} mt={4}>
          Discover Fundraisers
        </Typography>
        <Box display={"flex"} mt={2}>
          <Grid container spacing={2}>
            <Grid item md={11} xs={6}>
              <Item>
                <Card>
                  <CardMedia
                    component={"img"}
                    image={require("../images/children_in_a_classroom.jpg")}
                  />
                  <CardContent>
                    {" "}
                    <Typography variant="p">some text </Typography>
                  </CardContent>

                  <CardActionArea sx={{ width: "100%" }}>
                    <CardActions>
                      <LinearProgress
                        variant="determinate"
                        value={handleProgressChange}
                        sx={{
                          "& .MuiLinearProgress-determinate": {
                            backgroundColor: theme.palette.substitute.main,
                          },
                        }}
                      />
                    </CardActions>
                  </CardActionArea>
                  <CardContent>
                    <Typography variant="h6">some text</Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={6} xs={6}>
              <Card style={{ maxWidth: "400px" }}>
                <CardMedia
                  component={"img"}
                  image={require("../images/cypress_trees.jpg")}
                />
                <CardContent>
                  {" "}
                  <Typography variant="p">some text </Typography>
                </CardContent>
                <CardActionArea>
                  <LinearProgress
                    variant="determinate"
                    value={handleProgressChange}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography variant="h6">some text</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} xs={6}>
              <Item>
                <Card style={{ maxWidth: "400px" }}>
                  <CardMedia
                    component={"img"}
                    image={require("../images/cypress_trees.jpg")}
                  />
                  <CardContent>
                    {" "}
                    <Typography variant="p">some text </Typography>
                  </CardContent>
                  <CardActionArea>
                    <LinearProgress
                      variant="determinate"
                      value={handleProgressChange}
                      sx={{ backgroundColor: "green" }}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography variant="h6">some text</Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            <Grid item md={6} xs={6}>
              <Item>
                <Card style={{ maxWidth: "400px" }}>
                  <CardMedia
                    component={"img"}
                    image={require("../images/storey_building.jpg")}
                  />
                  <CardContent>
                    {" "}
                    <Typography variant="p">some text </Typography>
                  </CardContent>
                  <CardActionArea>
                    <LinearProgress
                      variant="determinate"
                      value={handleProgressChange}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography variant="h6">some text</Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            <Grid item md={6} xs={6}>
              <Item>
                <Card style={{ maxWidth: "400px" }}>
                  <CardMedia
                    component={"img"}
                    image={require("../images/storey_building.jpg")}
                  />
                  <CardContent>
                    {" "}
                    <Typography variant="p">some text </Typography>
                  </CardContent>
                  <CardActionArea>
                    <LinearProgress variant="determinate" value={50} />
                  </CardActionArea>
                  <CardContent>
                    <Typography variant="h6">some text</Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box py={5} textAlign={"center"}>
        <Typography variant="h3">How Taakulo works</Typography>
        <Typography variant="h5">
          Taakulo helps fundraise for what you care about
        </Typography>
      </Box>

      <Box
        className="background-image"
        textAlign={"center"}
        bgcolor={"#b1b0b0e6"}
        display={"flex"}
      >
        <Paper
          elevation={3}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            top: "70%",
          }}
        >
          <Card>
            <CardMedia
              component={"img"}
              image={require("../images/figurines_of_a_family.jpg")}
              alt="family figurines"
            />
          </Card>
        </Paper>
      </Box>
      <Container>
        <Grid container spacing={2} py={3}>
          <Grid item md={4}>
            <Typography variant="h5">1. Start your Fundraiser</Typography>
            <ul>
              <li>Set your fundraiser goal </li>
              <li>Tell your story </li>
            </ul>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h5">2.Share with others</Typography>
            <ul>
              <li>Send emails, etc </li>
              <li>Social media share </li>
            </ul>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h5">3.Manage donations</Typography>
            <ul>
              <li>one </li>
              <li>one </li>
              <li>one </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ textAlign: "center" }}>
        <Button variant="contained" color="substitute">
          Start fundraiser now
        </Button>
      </Container>
      <Container sx={{ p: 3 }}>
        <Typography variant="h4" textAlign={"center"} pt={10}>
          {" "}
          Donate now with
        </Typography>
      </Container>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box mt={2}>
          <img
            src="https://www.cdnlogo.com/logos/m/95/m-pesa.svg"
            alt="M-Pesa logo"
            width="100"
          />
        </Box>

        <Box mt={2}>
          <img
            src={require("../icons/mastercard.png")}
            alt="MasterCard logo"
            width="100px"
          />
        </Box>
        <Box mt={2}>
          <img
            src={require("../icons/Visa.png")}
            alt="Visa logo"
            width="100px"
          />
        </Box>
      </Container>
    </>
  );
};

export default Homepage;
