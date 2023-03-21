import User from './../models/User.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

import jwt from 'jsonwebtoken';

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    httpOnly: true,
  };

  res.cookie('jwt', token, cookieOptions);

  // removes the password from the output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    data: {
      user,
    },
  });
};

const signup = catchAsync(async (req, res, next) => {
  //   console.log('here1');

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    next(new AppError('name, email and password required', 400));
  }

  const newUser = await User.create({
    name,
    email,
    password,
  });

  createSendToken(newUser, 201, res);
});

export { signup };
