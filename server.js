const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Serve the HTML page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// This is the callback URL where the payment service "notifies" us
app.post("/payment-callback", (req, res) => {
  console.log("💰 Payment Callback Received:", req.body);

  // In real life, you would update your DB here
  res.json({ status: "success", message: "Callback received" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
