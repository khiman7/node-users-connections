const mongoose = require('mongoose');
const axios = require('axios');
const {
  DB_URL,
  USERS_NUMBER,
  CONNECTIONS_NUMBER,
} = require('../config/default.json');
const User = require('../models/User');

const getRandomUserId = () => {
  return Math.ceil(Math.random() * USERS_NUMBER);
};

const generateRandomUser = async () => {
  const data = await axios.get('https://randomuser.me/api/')
    .then(res => res.data.results[0]);

  const name = data.name.first;
  const surname = data.name.last;
  const registered = data.registered.date;
  const age = data.dob.age;
  const user = {
    name,
    surname,
    registered,
    age,
    followed: [],
    followers: [],
  };
  
  return user;
};

const seedUsers = async () => {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Connected to database on: ${DB_URL}`);
    console.log('Deleting old "users" collection...');
    await mongoose.connection.dropCollection('users');

    const users = [];
    
    // Creating array of 100 users without connections yet
    for (let i = 1; i <= USERS_NUMBER; ++i) {
      const user = await generateRandomUser();
      
      users.push({ userId: i, ...user });
      console.log(`User is generated [${i}/${USERS_NUMBER}]`);
    }

    console.log(`[✓] ${USERS_NUMBER} users successfully created`);

    // Creating 300 random connections between users
    for (let i = 0; i < CONNECTIONS_NUMBER; ++i) {
      const userId = getRandomUserId();
      const followId = getRandomUserId();

      if (userId === followId || users[userId - 1].followed.includes(followId)) {
        --i;
        continue;
      }
      
      users[userId - 1].followed.push(followId);
      users[followId - 1].followers.push(userId);
      
      console.log(
        `Connection between user "${userId}" and user "${followId}" created [${i + 1}/${CONNECTIONS_NUMBER}]`
      );
    }

    console.log(`[✓] ${CONNECTIONS_NUMBER} Connections between users have been successfully created`)
    console.log('Saving data to database...')

    // Saving generated users to database
    for (const user of users) {
        await User.create(user);
    }

    console.log('[✓] Users have been seeded successfully!')
  } catch (err) {
    console.log(err);
    console.log(`[✖] Something went wrong during script execution...`);
  } finally {
    mongoose.disconnect();
  }
};

seedUsers();
