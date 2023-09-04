import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';

// config env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get('/', (req, res) => {
    res.send("<h2>Welcome to Pharma</h2>");
});

// port key
const PORT = process.env.PORT || 2424;

// run listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} on port ${PORT}`.bgGreen.white);
})