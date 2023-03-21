import request from 'supertest';
import app from '../../app';

//

// SIGNUP

it('returns a 201 on successful signup', async () => {
  return await request(app)
    .post('/signup')
    .send({
      name: 'test',
      email: 'testuser@test.com',
      password: 'password',
    })
    .expect(201);
});
it('returns a 201 on successful signup', async () => {
  return await request(app)
    .post('/signup')
    .send({
      name: 'test',
      email: 'testuser@test.com',
      password: 'password',
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return await request(app)
    .post('/signup')
    .send({
      name: 'test',
      email: 'testuser',
      password: 'password',
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return await request(app)
    .post('/signup')
    .send({
      name: 'test',
      email: 'testuser@test.com',
      password: 'p',
    })
    .expect(400);
});

it('returns a 400 with missing name, email and password', async () => {
  await request(app)
    .post('/signup')
    .send({
      email: 'testuser@test.com',
      password: 'password',
    })
    .expect(400);

  await request(app)
    .post('/signup')
    .send({
      name: 'test',
      password: 'password',
    })
    .expect(400);

  await request(app)
    .post('/signup')
    .send({
      name: 'test',
      email: 'testser@test.com',
    })
    .expect(400);
});

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/signup')
    .send({
      name: 'test',
      email: 'testuser@test.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/signup')
    .send({
      name: 'test',
      email: 'testuser@test.com',
      password: 'password',
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/signup')
    .send({
      name: 'test',
      email: 'testuser@test.com',
      password: 'password',
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
