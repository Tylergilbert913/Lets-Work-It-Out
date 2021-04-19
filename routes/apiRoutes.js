const router = require("express").router();
const db = require("../models");

module.exports = function (app) {
  // App.get to pull up info for the workouts page
  router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    })
      .catch(err => {
        res.status(400).json(err);
      });
  })
  // App.get to pull up info for the range page
  router.get("/api/workouts/range", ({ }, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });
  // App.post to submit new completed workouts
  router.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });
  // App.put to update workouts by MongoDB _id value and update the exercsise body
  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
    ).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });
};