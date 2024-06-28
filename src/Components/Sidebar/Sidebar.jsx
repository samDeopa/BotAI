import React, { useContext } from "react";
import { Stack, useMediaQuery, Box, Typography, Button } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import logo from "../../asset/logo.png";
import { BsChatLeftDots } from "react-icons/bs";
import { context } from "../theme/context";
import { Link } from "react-router-dom";
function Sidebar({ handleclose, setchat }) {
  const isMobile = useMediaQuery("(max-width:764px)");
  const { mode, setmode } = useContext(context);
  return (
    <div>
      {isMobile && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
          onClick={handleclose}
        >
          <Typography
            sx={{
              color: mode === "light" ? "primary.dark" : "text.primary",
              width: "50px",
              padding: "10px",
              fontSize: "20px",
            }}
          >
            Close
          </Typography>
          <Box
            sx={{
              color: mode === "light" ? "primary.dark" : "text.primary",
              paddingTop: "7px",
              paddingRight: "3px",
              fontSize: "20px",
            }}
          >
            <IoMdClose />
          </Box>
        </Box>
      )}
      <Stack direction="column" justifyContent="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Stack
            onClick={() => {
              setchat([]);
              handleclose();
            }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              bgcolor: "primary.main",
              padding: "15px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "40px", borderRadius: "10px" }}
            />
            <Typography variant="h2" sx={{ color: "text.primary" }}>
              New Chat
            </Typography>
            <Box
              sx={{
                color: "text.primary",
                fontSize: "20px",
                paddingTop: "10px",
              }}
            >
              <BsChatLeftDots style={{ height: "40px" }} />
            </Box>
          </Stack>
        </Link>
        <Link to="/App1" style={{ textDecoration: "none" }}>
          <Stack
            sx={{ marginLeft: { md: "30px", xs: "15px" }, marginTop: "30px" }}
          >
            <Button
              sx={{
                padding: "10px",
                width: "250px",
                borderRadius: "10px",
                backgroundColor: "primary.main",
                fontFamily: "Ubuntu, Open Sans",
                fontWeight: "600",
                fontSize: "16px",
                color: "text.primary",

                "&:hover": {
                  backgroundColor: "primary.dark",
                  cursor: "pointer",
                },
              }}
            >
              Past Conversation
            </Button>
          </Stack>
        </Link>
      </Stack>
    </div>
  );
}

export default Sidebar;
