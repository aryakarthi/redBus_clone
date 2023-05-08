import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import "./SearchTitles.scss";

const SearchTitles = () => {
  return (
    <>
      {/* <Stack>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={2}>
              <Filters />
            </Grid>
            <Grid item md={10}>
              <BannerTiles /> */}
              <Stack>
                <Grid container>
                  <Grid item lg={2}>
                    <Stack>
                      <Typography>12 buses found</Typography>
                    </Stack>
                  </Grid>
                  <Grid item lg={4}>
                    <Stack>
                      <Grid container>
                        <Grid item lg={4}>
                          <Stack>
                            <Typography>SORT BY:</Typography>
                          </Stack>
                        </Grid>
                        <Grid item lg={4}>
                          <Stack>
                            <Typography>Departure</Typography>
                          </Stack>
                        </Grid>
                        <Grid item lg={4}>
                          <Stack>
                            <Typography>Duration</Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>
                  <Grid item lg={4}>
                    <Stack>
                      <Grid container>
                        <Grid item lg={4}>
                          <Stack>
                            <Typography>Arrival</Typography>
                          </Stack>
                        </Grid>
                        <Grid item lg={4}>
                          <Stack>
                            <Typography>Ratings</Typography>
                          </Stack>
                        </Grid>
                        <Grid item lg={4}>
                          <Stack>
                            <Typography>Fare</Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>
                  <Grid item lg={2}>
                    <Stack>
                      <Typography>Seats Available</Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            {/* </Grid>
          </Grid>
        </Container>
      </Stack> */}
    </>
  );
};

export default SearchTitles;
