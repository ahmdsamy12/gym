import { Box, Button, Stack, Typography } from "@mui/material";
import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmenImage from "../assets/icons/equipment.png";
/* eslint-disable react/prop-types */
const Details = ({ exerciseDetail }) => {
  const { bodyPart, target, equipment, gifUrl, name, instructions } =
    exerciseDetail;

  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: targetImage,
      name: target,
    },
    {
      icon: equipmenImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap={"60px"}
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Box>
          {instructions &&
            instructions.map((ins, i) => (
              <Typography key={i} variant="body1">
                {ins}
              </Typography>
            ))}
        </Box>

        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction={"row"}
            gap={"24px"}
            alignItems={"center"}
          >
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                height: "100px",
                width: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform={"capitalize"} variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
