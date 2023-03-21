import AppError from './appError.js';

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  // loop through keyValue object in error object and get the values
  let fieldNameAndVal = Object.values(err.keyValue).map((el) => el);

  const message = `Duplicate field values - ${fieldNameAndVal[0]}, please use another value!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const sendError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

const errorController = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  let error = {
    ...err,
    name: err.name,
    message: err.message,
  };

  if (error.name === 'CastError') error = handleCastErrorDB(error);
  else if (error.code === 11000) error = handleDuplicateFieldsDB(error);
  else if (error.name === 'ValidationError')
    error = handleValidationErrorDB(error);

  sendError(error, res);
};

export default errorController;
