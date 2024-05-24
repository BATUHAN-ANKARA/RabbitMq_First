const express = require("express");
const publisher = require("./mq/publisher");

const app = express();

app.use(express.json());

const router = express.Router();

router.post("/create", async (req, res) => {
  const { email } = req.body;
    await publisher({ email, date: Date.now() });
    res.send("Email sent");
});

app.use(router);

app.listen(3000, async () => {
  console.log("Server is running on port 3000");
});
