import request from 'supertest';
import expect from 'expect';
import meals from '../data/meal.json';
import user from '../data/user.json';

import { app } from '../index';

let token = '';


describe('test user login', () => {
  it('should login a user', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send(user.user)
      .expect(200)
      .expect((res) => {
        expect(res.body)
          .toBeA('object');
        expect(res.body.userLogin)
          .toBeA('object');
      })
      .end((err, res) => {
        if (err) return done(err);
        token = `Bearer ${res.body.userLogin.token}`;
        done();
        return done;
      });
  });
});

/*
  // test for Add meal API
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
describe('Add meal API\'s', () => {
  it('should add new meal', (done) => {
    request(app)
      .post('/api/v1/meals')
      .send(meals.newMeal)
      .set('Authorization', token)
      .expect(201)
      .expect((res) => {
        expect(res.body).toBeA('object');
        expect(res.body.createdMeal.meal)
          .toBeA('object')
          .toIncludeKeys(['id', 'name', 'price']);
      })
      .end(done);
  });
});

describe('Meals endpoint\'s test', () => {
  /*
  // test for fetch all meals API
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  it('should return all meals', (done) => {
    request(app)
      .get('/api/v1/meals')
      .set('Authorization', token)
      .expect(200)
      .expect((res) => {
        expect(res.body)
          .toBeA('object');
        expect(res.body.meals)
          .toBeA('object');
        expect(res.body.meals.meal[0])
          .toBeA('object')
          .toIncludeKeys(['id', 'name', 'price']);
      })
      .end(done);
  });

  /*
  // test for fetch a meal API
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  // describe('Get a meal API', () => {
  //   // should get a meal by id, and return the object including the required keys
  //   it('should get a meal by id', (done) => {
  //     request(app)
  //       .get('/api/v1/meals/14')
  //       .set('Authorization', token)
  //       .expect(200)
  //       .expect((res) => {
  //         expect(res.body)
  //           .toBeA('object');
  //         expect(res.body.data.meal)
  //           .toBeA('object')
  //           .toIncludeKeys(['id', 'name', 'description', 'price']);
  //       })
  //       .end(done);
  //   });

  //   // should return status:400 when user enters a meal id that doesn't exit
  //   it('should return a 404 for a meal id that doen\'t exist', (done) => {
  //     request(app)
  //       .get('/api/v1/meals/40')
  //       .set('Authorization', token)
  //       .expect(404)
  //       .end(done);
  //   });
  // });

  /*
  // tests for update a meal API
  */
  describe('Update Meals API', () => {
    // test to see if we get a status: 202, when we update a meal
    it('should update a meal by id', (done) => {
      request(app)
        .put('/api/v1/meals/1')
        .set('Authorization', token)
        .send(meals.updateMeal)
        .expect(202)
        .end(done);
    });

    // test if we get a status: 400 when the update id doesn't exist
    it('should return a 400 if meal id doesn\'t exist', (done) => {
      request(app)
        .put('/api/v1/meals/50')
        .set('Authorization', token)
        .send(meals.updateMeal)
        .expect(400)
        .end(done);
    });
  });

  /*
  // tests for delete a meal API
  */

  describe('Delete Meals API', () => {
    // test to see if we get a status: 202, when we delete a meal
    it('should delete a meal by id', (done) => {
      request(app)
        .delete('/api/v1/meals/1')
        .set('Authorization', token)
        .expect(202)
        .end(done);
    });

    //  test if we get a status: 400 when the delete id doesn't exist
    it('should return a 400 if meal id doesn\'t exist', (done) => {
      request(app)
        .delete('/api/v1/meals/50')
        .set('Authorization', token)
        .expect(400)
        .end(done);
    });
  });
});