// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/UserRoutes");
const tweetRoutes = require("./routes/TweetRoutes");

try {
  mongoose.connect(`mongodb+srv://bc123:123@cluster0.jmrhbdh.mongodb.net/`);
  console.log("DB connected");
} catch(err){
  console.log(err);
}



app.use("/api/user", userRoutes);
app.use("/api/tweet", tweetRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
