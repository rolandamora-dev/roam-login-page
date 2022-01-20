const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');
const path = require('path')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const app = express();
dotenv.config({ path: './config/config.env' });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cookie parser
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/admin', authRouter);
app.use('/user', userRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  });
});
