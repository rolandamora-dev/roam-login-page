const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');
const path = require('path')
const cors = require('cors');

const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

const app = express();
dotenv.config({ path: './config/config.env' });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/user', userRouter);
app.use('/admin', authRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  });
});
