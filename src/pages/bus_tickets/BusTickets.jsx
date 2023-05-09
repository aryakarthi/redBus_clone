import React from "react";
import TravelInfo from "../../components/ticketspage/travel_info/TravelInfo";
import ModifySearch from "../../components/ticketspage/modify_search/ModifySearch";
import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import Filters from "../../components/ticketspage/filter_menu/Filters";
import BannerTiles from "../../components/ticketspage/banner_tiles/BannerTiles";
import SearchTitles from "../../components/ticketspage/search_titles/SearchTitles";
import primoLogo from "../../assets/images/primo_logo.svg";

import { useSelector, useDispatch } from "react-redux";

import "./BusTickets.scss";

const BusTickets = () => {
  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  console.log("state", state);
  return (
    <>
      <Stack className="bus-tickets">
        <TravelInfo />
        <ModifySearch />
        <Stack className="menu-area">
          <Container maxWidth="xl">
            <Grid container>
              <Grid item md={2}>
                <Filters />
              </Grid>
              <Grid item md={10}>
                <BannerTiles />
                <SearchTitles />
                <Stack className="search-results">
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

                    <Grid item lg={1}>
                      <Stack>
                        <Typography>.</Typography>
                      </Stack>
                    </Grid>
                    <Grid item lg={2}>
                      <Stack>
                        <Typography>19:05</Typography>
                        <Typography>Koyambedu</Typography>
                      </Stack>
                    </Grid>
                    <Grid item lg={1}>
                      <Stack>
                        <Typography>10h 30m</Typography>
                      </Stack>
                    </Grid>

                    <Grid item lg={2}>
                      <Stack>
                        <Typography>05:35</Typography>
                        <Typography>17-May</Typography>
                        <Typography>Vannarpettai</Typography>
                      </Stack>
                    </Grid>
                    <Grid item lg={1}>
                      <Stack>
                        <Typography>4.7</Typography>
                        <Typography>345</Typography>
                      </Stack>
                    </Grid>
                    <Grid item lg={1}>
                      <Stack>
                        <Typography>Starts from INR 1560</Typography>
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
      </Stack>
    </>
  );
};

export default BusTickets;
