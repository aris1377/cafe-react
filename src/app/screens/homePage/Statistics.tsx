import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";

export default function Statistics() {
  return (
    <div className="static-frame">
      <Container>
        <Stack className="info">
          <Stack className="static-box">
            <Box className="static-text">Cafes</Box>
            <Box className="static-num">5+</Box>
          </Stack>

          <Divider height="64" width="2" bg="#cfcfcd" />

          <Stack className="static-box">
             <Box className="static-text">Since</Box>
            <Box className="static-num">2022</Box>
          </Stack>
          <Divider height="64" width="2" bg="#cfcfcd" />
          <Stack className="static-box">
            <Box className="static-text">Drinks</Box>
            <Box className="static-num">30+</Box>
          </Stack>
          <Divider height="64" width="2" bg="#cfcfcd" />
          <Stack className="static-box">
            <Box className="static-text">Clients</Box>
            <Box className="static-num">400+</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
