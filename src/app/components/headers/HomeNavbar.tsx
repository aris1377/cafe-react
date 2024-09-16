import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";



export default function HomeNavbar(){
    const authMember = null;
    return (
       <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to={"/"}>
              <img className="brand-logo" src="/icons/burak.svg" />
            </NavLink>
         </Box>
             <Stack className="links">
                   <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underLine"}>
                Home
              </NavLink>
                 </Box>
                     <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName={"underLine"}>
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underLine"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underLine"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underLine"}>
                Help
              </NavLink>
                </Box>
                 {!authMember ? (
                    <Box>
                     <Button
                    variant="contained"
                     className="login-button">
                         Login
                </Button>
              </Box>
            ) : (
             <img
                className="user-avatar"
                src={"/icons/default-user.svg"}
                aria-haspopup={"true"}
              />
            )}
            </Stack>
          </Stack>
           <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt"}>
              Coffee has the flavor of dreams, of light, of possibility!
            </Box>
            <Box className={"signup"}>
              {!authMember ? (
                <Button
                  variant={"contained"}
                  className={"signup-button"}
                >
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Box className={"logo-frame"}>
            <div className={"logo-img"}></div>
          </Box>
        </Stack>
      </Container>
    </div>
    );
}

function useGlobals(): { authMember: any; } {
    throw new Error("Function not implemented.");
}
