const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/data", (req, res) => {
  res.json({
    message: "Hello from server!",
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
