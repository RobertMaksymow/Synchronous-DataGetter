import mongoose from "mongoose";
// import BTC_1W from "../modelsDB/BTC_1W_model.js";

//POST a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  let emptyFields = [];

  // Add to database
  try {
    const user_id = req.user._id;
    const BTC_1W = await BTC_1W.create({ title, load, reps, user_id });
    res.status(200).json(BTC_1W);
  } catch (error) {
    res.status(400).json({ error: error.message, emptyFields });
  }
};

//UPDATE a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
