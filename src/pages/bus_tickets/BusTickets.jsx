import React from "react";
import TravelInfo from "../../components/ticketspage/travel_info/TravelInfo";
import ModifySearch from "../../components/ticketspage/modify_search/ModifySearch";
import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import Filters from "../../components/ticketspage/filter_menu/Filters";
import BannerTiles from "../../components/ticketspage/banner_tiles/BannerTiles";
import SearchTitles from "../../components/ticketspage/search_titles/SearchTitles";
import primoLogo from "../../assets/images/primo_logo.svg";
const BusTickets = () => {
  return (
    <>
      <TravelInfo />
      <ModifySearch />
      <Stack>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={2}>
              <Filters />
            </Grid>
            <Grid item md={10}>
              <BannerTiles />
              <SearchTitles />
              <Stack>
                <Grid container>
                  <Grid item lg={2}>
                    <Stack>
                      <Box
                        className="primo-logo"
                        component="img"
                        alt="Primo"
                        src={primoLogo}
                      />
                      <Typography>VKV Travels</Typography>
                      <Typography>Bharat Benz A/C Sleeper (2+1)</Typography>
                    </Stack>
                  </Grid>
                  <Grid item lg={4}>
                    <Stack>
                      <Grid container>
                        <Grid item lg={4}>
                          <Stack>
                            <Typography>.</Typography>
                          </Stack>
                        </Grid>
                        <Grid item lg={4}>
                          <Stack>
                            <Typography>19:05</Typography>
                            <Typography>Koyambedu</Typography>
                          </Stack>
                        </Grid>
                        <Grid item lg={4}>
                          <Stack>
                            <Typography>10h 30m</Typography>
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
                            <Typography>05:35</Typography>
                            <Typography>17-May</Typography>
                            <Typography>Vannarpettai</Typography>
                          </Stack>
                        </Grid>
                        <Grid item lg={4}>
                          <Stack>
                            <Typography>4.7</Typography>
                            <Typography>345</Typography>
                          </Stack>
                        </Grid>
                        <Grid item lg={4}>
                          <Stack>
                            <Typography>Starts from INR 1560</Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>
                  <Grid item lg={2}>
                    <Stack>
                      <Typography>24 Seats available</Typography>
                      <Typography>8 Single</Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default BusTickets;
