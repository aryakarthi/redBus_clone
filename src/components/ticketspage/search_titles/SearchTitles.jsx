import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import "./SearchTitles.scss";

const SearchTitles = () => {
  return (
    <>
      <Stack className="search-titles">
        <Grid container>
          <Grid item lg={2}>
            <Stack>
              <Typography>12 buses found</Typography>
            </Stack>
          </Grid>

          <Grid item lg={1}>
            <Stack>
              <Typography>SORT BY:</Typography>
            </Stack>
          </Grid>
          <Grid item lg={2}>
            <Stack>
              <Typography>Departure</Typography>
            </Stack>
          </Grid>
          <Grid item lg={1}>
            <Stack>
              <Typography>Duration</Typography>
            </Stack>
          </Grid>

          <Grid item lg={2}>
            <Stack>
              <Typography>Arrival</Typography>
            </Stack>
          </Grid>
          <Grid item lg={1}>
            <Stack>
              <Typography>Ratings</Typography>
            </Stack>
          </Grid>
          <Grid item lg={1}>
            <Stack>
              <Typography>Fare</Typography>
            </Stack>
          </Grid>

          <Grid item lg={2}>
            <Stack>
              <Typography>Seats Available</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default SearchTitles;
