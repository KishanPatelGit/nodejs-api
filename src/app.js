const express = require("express");
const app = express();
require("./db/mongoose");

const taskRouter = require("./router/taskRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(taskRouter);

app.listen(3000);
