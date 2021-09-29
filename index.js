const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router.js');
const { HOST, PORT, DB_URL } = require('./config/default.json');

const app = express();

app.use(express.json());
app.use('/api', router);

const startServer = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    app.listen(PORT, () => {
      console.log(`Server is running on ${HOST}:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
