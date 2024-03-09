import { Box, Stack, Typography } from "@mui/material";

/* eslint-disable react/prop-types */
const ExercisesVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos);

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p={"20px"}>
      <Typography variant="h3" mb={"33px"}>
        watch {` `}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>
        {` `}
        exercise videos
      </Typography>

      <Stack
        sx={{
          flexWrap: "wrap",
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, i) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={i}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color={"#000"}>
                {item.video.title}
              </Typography>
              <Typography variant="h6" color={"#000"}>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExercisesVideos;
