import { Box, Button, Typography } from "@mui/material";
import img from "../assets/images/main.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position={"relative"}
      p={"20px"}
    >
      <Typography color={"#ff2625"} fontWeight={"600"} fontSize={"26px"}>
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={"23px"}
        mt={"30px"}
      >
        Sweat, Smile <br />
        and Repeat
      </Typography>

      <Typography fontSize={"22px"} lineHeight={"35px"} mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button href="#exercises" variant="contained" color="error">
        Explore Exercises
      </Button>
      <Typography
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontWeight={600}
        color={"#ff2625"}
        fontSize={"200px"}
      >
        Exercise
      </Typography>
      <img src={img} className="hero-banner-img" alt="hero-banner" />
    </Box>
  );
};

export default HeroBanner;
