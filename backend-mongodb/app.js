
import express from 'express';
import authRoutes from './routes/authRoutes.js'
import cors from 'cors';
import errorController from './utils/errorHandler.js';

const app = express();


app.use(cors());
app.options('*', cors());

app.use(express.json());

app.use('/', authRoutes);

// unknown routes
app.all('*', (req, res, next) => {
  const err = new AppError(`${req.originalUrl} not found!`, 404);
  next(err);
});

app.use(errorController);

export default app;
