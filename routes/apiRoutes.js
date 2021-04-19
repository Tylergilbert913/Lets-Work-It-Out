const db = require("../models");

module.exports = function(app) {
    // get pulls data into the workouts page
    app.get("/api/workouts", (req, res) => {
      db.Workout.find({})
          .sort({ date: -1 })
          .then(dbWorkout => {
              res.json(dbWorkout);
          })
          .catch(err => {
              res.status(400).json(err);
          });
  });
    // gets and pulls data into the range page
    app.get("/api/workouts/range", (req, res) => {
      db.Workout.find({}).limit(7)
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
    //post to submit completed workouts
    app.post("/api/workouts", ({ body }, res) => {
      db.Workout.create(body)
          .then(dbWorkout => {
              res.json(dbWorkout);
          })
          .catch(err => {
              res.status(400).json(err);
          });
  });
      // updates by MongoDB_ID value and update the exercise
      app.put("/api/workouts/:id", function (req, res) {
        let id = req.params.id;
        db.Workout.findByIdAndUpdate(
            id,
            { $push: { exercises: req.body } },
        )
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            });
    });
    
};