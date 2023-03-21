import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';

let mongo;

// beforeAll hook - connect to in-memory mongodb server
beforeAll(async () => {
  process.env.JWT_SECRET =
    'ireallyreallyreallyneedtomakethisnumberlongtrytoalwaysdothesame';
  process.env.JWT_EXPIRES_IN = '30d';
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {});
});

// beforeEach hook - delete all entries in the DB
beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});
