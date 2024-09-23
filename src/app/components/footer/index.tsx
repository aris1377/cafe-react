import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  background: hsl(0, 5%, 13%);
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
    <Footers>
      <Container>
        <Stack flexDirection={"row"} sx={{ mt: "94px" }}>
          <Stack flexDirection={"column"} style={{ width: "340px" }}>
              <Box>
              <p
                style={{
                  fontSize: "35px",
                  fontWeight: "900",
                  fontStyle: "normal",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  color: "#c5c8c9",
                  borderRadius: "24px"
                }}
              >Cafe Amore</p>
            </Box>
            <Box className={"foot-desc-txt"}>
               "Whether you're starting your morning or taking a midday break,
              our coffee shop offers the perfect blend of quality and comfort.
              Visit us in-store for a cozy experience or order online for
              convenience delivered to your door!"
            </Box>
            <Box className="sns-context">
              <img src={"/icons/facebook.svg"} />
              <img src={"/icons/twitter.svg"} />
              <img src={"/icons/instagram.svg"} />
              <img src={"/icons/youtube.svg"} />
            </Box>
          </Stack>
          <Stack sx={{ ml: "288px" }} flexDirection={"row"}>
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Links</Box>
                <Box className={"foot-category-link"}>
                  <Link to="/">Home</Link>
                  <Link to="/products">Products</Link>
                  {authMember && <Link to="/orders">Find us</Link>}
                  <Link to="/help">Help</Link>
                </Box>
              </Box>
            </Stack>
            <Stack sx={{ ml: "100px" }}>
              <Box>
                <Box className={"foot-category-title"}>Find us</Box>
                <Box
                  flexDirection={"column"}
                  sx={{ mt: "20px" }}
                  className={"foot-category-link"}
                  justifyContent={"space-between"}
                >
                  <Box flexDirection={"row"} className={"find-us"}>
                    <span>L.</span>
                    <div>Tashkent Amir Temur street 45,</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>P.</span>
                    <div>+99890 557 65 45</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>E.</span>
                    <div>cafeAmore@gmail.com</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>H.</span>
                    <div>Visit 24 hours</div>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          style={{ border: "1px solid #C5C8C9", width: "100%", opacity: "0.2" }}
          sx={{ mt: "80px" }}
        ></Stack>
        <Stack className={"copyright-txt"}>
          © Copyright CAFE AMORE Cafe, All rights reserved.
        </Stack>
      </Container>
    </Footers>
  );
}
