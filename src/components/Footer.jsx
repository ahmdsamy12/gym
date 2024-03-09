import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt={"80px"} bgcolor={"#fff3f4"}>
      <Stack alignItems={"center"} gap={"40px"} px={"40px"} pt={"24px"}>
        <img src={logo} alt="logo" width={"200px"} height={"40px"} />
        <Typography variant="h5" pb={"40px"} mt={"20px"}>
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/ahmed-samy-35a79a252/"
            target="_blank"
            style={{ textDecoration: "none", color: "#ff2625" }}
          >
            Ahmed Samy
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
