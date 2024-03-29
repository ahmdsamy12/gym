/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
import icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={icon} alt="dumbbell" width={"40px"} height={"40px"} />
      <Typography
        fontSize={"24px"}
        fontWeight={"bold"}
        color={"#3a1212"}
        textTransform={"capitalize"}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
