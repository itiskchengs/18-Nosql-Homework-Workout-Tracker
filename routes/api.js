const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", async (req,res) => {
  const findWorkouts = await Workout.find({});
    try{
        res.status(200).json(findWorkouts);
    }catch{
        res.status(500).json(err);
    }
})

router.put("/api/workouts/:id", async (req, res) => {
    const updateWorkout = await Workout.findByIdAndUpdate({_id: req.params.id}, {execrises: req.body});
    try{
        res.status(200).json(updateWorkout);
    } catch {
        res.status(500).json(err);
    }
})

router.post("/api/workouts", async (req, res) => {
    const createWorkout = await Workout.create(req.body);
    try{
        res.status(200).json(createWorkout);
    } catch {
        res.status(500).json(err);
    }
})

router.get("/api/workouts/range", async(req, res) => {
    const findWorkoutRange = await Workout.find({});
    try{
        res.status(200).json(findWorkoutRange)
    } catch {
        res.status(500).json(err);
    }
})


module.exports = router;