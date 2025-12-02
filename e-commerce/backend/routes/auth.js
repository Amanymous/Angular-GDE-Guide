const express = require("express");
const { registerUser, loginUser } = require("../handlers/auth");
const router = express.Router();

router.post("/register", async (req, res) => {
  let model = req.body;
  if (model.name && model.email && model.password) {
    await registerUser(model);
    res.send({
      message: "User registered",
    });
  } else {
    res.status(400).json({
      error: "Please provide name,email and password",
    });
  }
});

router.post("/login", async (req, res) => {
  const model = req.body;
  console.log("model =", model);

  if (!model.email || !model.password) {
    return res.status(400).json({ error: "Please provide email and password" });
  }

  const result = await loginUser(model);

  if (!result) {
    return res.status(400).json({ error: "Email or password is incorrect" });
  }

  return res.send(result);
});

module.exports = router;
