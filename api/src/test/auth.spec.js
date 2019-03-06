import request from 'supertest';
import expect from 'expect';
import user from '../data/user.json';


import { app } from '../index';


describe('Auth\'s endpoints test', () => {
  /*
  // test for Add user endpoint
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  describe('Add user endpoint', () => {
    it('should add a new user', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send(user.normalUser)
        .expect(201)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.createdUser.message)
            .toBe('user created successfully');
          expect(res.body.createdUser.user)
            .toBeA('object')
            .toIncludeKeys(['name', 'email', 'phone_number', 'authorizations']);
        })
        .end(done);
    });

    it('should add a new caterer', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send(user.caterer)
        .expect(201)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.createdUser.message)
            .toBe('user created successfully');
          expect(res.body.createdUser.user)
            .toBeA('object')
            .toIncludeKeys(['user_id', 'restaurant_name', 'restaurant_logo']);
        })
        .end(done);
    });

    it('should only allow unique users', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send(user.caterer)
        .expect(400)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.error.message)
            .toBeA('string')
            .toEqual('You have created an account with this email' || 'could not create user' || 'Some values are missing' || 'Please enter a valid email address');
        })
        .end(done);
    });
  });

  // /**
  // *
  // */
  describe('Add user endpoint', () => {
    it('should log user in the app', (done) => {
      request(app)
        .post('/api/v1/auth/login')
        .send(user.user)
        .expect(200)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.userLogin.user)
            .toBeA('object')
            .toIncludeKeys(['id', 'name', 'email', 'phone_number', 'authorizations', 'role_id']);
        })
        .end(done);
    });

    it('should return invalid user email', (done) => {
      request(app)
        .post('/api/v1/auth/login')
        .send(user.invalid_user)
        .expect(400)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.error.message)
            .toBeA('string')
            .toEqual('Authentication failed. User not found.' || 'Some values are missing' || 'Please enter a valid email address' || 'user is probably not a caterer');
        })
        .end(done);
    });

    it('should return invalid user password', (done) => {
      request(app)
        .post('/api/v1/auth/login')
        .send(user.invalid_password)
        .expect(400)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.error.message)
            .toBeA('string')
            .toEqual('Authentication failed.Wrong password.');
        })
        .end(done);
    });
  });
});
