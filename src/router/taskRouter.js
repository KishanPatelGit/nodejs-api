const router = require("express").Router();
const Task = require("../model/taskModel");

router.get("/task", async (req, res) => {
  try {
    const task = await Task.find({});
    res.send(task);
  } catch (error) {
    res.send({ error });
  }
});

router.post("/task", async (req, res) => {
  try {
    const task = await new Task(req.body);
    await task.save();
    res.send(task);
  } catch (error) {
    res.send({ error });
  }
});

router.get("/task/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.send({ error });
    }
    res.send(task);
  } catch (error) {
    res.send({ error });
  }
});

router.patch("/task/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    if (!task) {
      return res.send({ error });
    }
    await task.save();
    const updateTask = await Task.findById(req.params.id);
    res.send(updateTask);
  } catch (error) {
    res.send({ error });
  }
});

router.delete("/task/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndRemove(req.params.id);

    if (!task) {
      res.send({ error });
    }
    res.send({ success: "Delete Task Successfully" });
  } catch (error) {
    res.send({ error });
  }
});
module.exports = router;
