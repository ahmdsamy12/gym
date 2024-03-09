/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Pagination, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 2;

  const indexOfLastExercises = currentPage * exercisesPerPage;
  const indexOfFirstExercises = indexOfLastExercises - exercisesPerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercises,
    indexOfLastExercises
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt={"50px"} p={"20px"}>
      <Typography variant="h3" mb={"46px"}>
        Show Results
      </Typography>
      <Stack
        direction={"row"}
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {currentExercises.map((exercise, i) => (
          <ExerciseCard key={i} exercise={exercise} />
        ))}
      </Stack>
      <Stack alignItems={"center"} mt={5}>
        {exercises.length > 2 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 2)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
