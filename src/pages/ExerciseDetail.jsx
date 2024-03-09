import { Box } from "@mui/material";
import Details from "../components/Details";
import ExercisesVideos from "../components/ExercisesVideos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetai] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetai(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );

      setExerciseVideos(exerciseVideosData);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExercisesVideos
        exerciseVideos={exerciseVideos.contents}
        name={exerciseDetail.name}
      />
    </Box>
  );
};

export default ExerciseDetail;
