const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const { PORT, DB_URL } = require('./config/default.json');

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

const startServer = async () => {
  try {
    // await mongoose.connect(DB_URL, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    // });

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
