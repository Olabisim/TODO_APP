
import express from 'express';
const app = express();

import cors from 'cors';

app.use(cors());
app.options('*', cors());

app.use(express.json());


// unknown routes
app.all('*', (req, res, next) => {
  const err = new AppError(`${req.originalUrl} not found!`, 404);
  next(err);
});

app.use(errorController);

export default app;
