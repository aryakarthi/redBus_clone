import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React from "react";

import "./ShowSeats.scss";

import { GiSteeringWheel } from "react-icons/gi";

const ShowSeats = ({ bus }) => {
  console.log(bus);
  // console.log(data.bus);
  return (
    <>
      <Stack className="showseats-container">
        <Container>
          <Grid container>
            <Grid item md={12}>
              <Stack className="price-filter-area" direction={"row"}>
                <Typography>Seat Price</Typography>
                <Stack className="price-filter" direction={"row"}>
                  <Box className="price-filter-box">All</Box>
                  <Box className="price-filter-box">{bus.UpperPrice}</Box>
                  <Box className="price-filter-box">{bus.LowerPrice}</Box>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack className="instruction">
                <Typography className="text">
                  Click on an Available seat to proceed with your transaction.
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack className="seat-hint-area">
                <Typography className="seat-legend">SEAT LEGEND</Typography>
                <Stack direction={"row"} className="seat-hint">
                  <Stack direction={"row"} className="hint-info">
                    <Box className="available hint" />
                    <Typography>Available</Typography>
                  </Stack>
                  <Stack direction={"row"} className="hint-info">
                    <Box className="unavailable hint" />
                    <Typography>Unavailable</Typography>
                  </Stack>
                  <Stack direction={"row"} className="hint-info">
                    <Box className="female hint" />
                    <Typography>Female</Typography>
                  </Stack>
                  <Stack direction={"row"} className="hint-info">
                    <Box className="male hint" />
                    <Typography>Male</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack className="seat-selector">
                <Stack className="lower-deck-area">
                  <Typography>Lower Deck</Typography>
                  <Stack direction={"row"} className="lower-deck-box">
                    <Stack className="driver-cabin">
                      <Box>
                        <GiSteeringWheel className="steer-wheel" />
                      </Box>
                    </Stack>
                    <Stack className="lower-seat-selector">
                      <Stack>
                        <FormGroup className="low-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                      <Stack>
                        <FormGroup className="low-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                      <Stack>
                        <FormGroup className="low-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack className="upper-deck-area">
                  <Typography>Upper Deck</Typography>
                  <Stack direction={"row"} className="upper-deck-box">
                    <Stack className="upper-space"></Stack>
                    <Stack className="upper-seat-selector">
                      <Stack>
                        <FormGroup className="up-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                      <Stack>
                        <FormGroup className="up-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                      <Stack>
                        <FormGroup className="up-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Label"
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={6}></Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default ShowSeats;
