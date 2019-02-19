import request from 'supertest';
import expect from 'expect';
import Meal from '../data/meal.json';


// import * as app from '../index';
import { app } from '../index';

describe('Meal API test', () => {
  /*
   test for fetch all meals API
   test to see if the res body is an object
   test to see if the response data is an object and if it includes required keys
  */
  describe('get meals API', () => {
    it('should return all meals', (done) => {
      request(app)
        .get('/api/v1/meals/')
        .expect(200)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.data[0])
            .toBeA('object')
            .toIncludeKeys(['id', 'user_id', 'name', 'price', 'image']);
        })
        .end(done);
    });
  });


  /*
   test for Add meal API
   test to see if the res body is an object
   test to see if the response data is an object and if it includes required keys
  */
  describe('Add meal API', () => {
    it('should add new meal', (done) => {
      request(app)
        .post('/api/v1/meals/')
        .send(Meal)
        .expect(201)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.data[0])
            .toBeA('object')
            .toIncludeKeys(['id', 'user_id', 'name', 'price', 'image']);
        })
        .end(done);
    });
  });

  /*
  // test for fetch a particular meal API
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  describe('get a particular meal with an Id', () => {
    it('should get a meal by it\'s id', (done) => {
      request(app)
        .get('/api/v1/meals/1')
        .expect(200)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.data)
            .toBeA('object')
            .toIncludeKeys(['id', 'user_id', 'name', 'price', 'image']);
        })
        .end(done);
    });
  });

  /*
    test for delete API
  */
  describe('Delete Meal API', () => {
    it('should delete a meal by id', (done) => {
      request(app)
        .delete('/api/v1/meals/2')
        .expect(202)
        .end(done);
    });

    // test if we get a status: 204 when the delete id doesn't exist
    it('should return a 404 if meal id doesn\'t exist', (done) => {
      request(app)
        .delete('/api/v1/meals/22')
        .expect(404)
        .end(done);
    });
  });


  /*
  // tests for update a meal API
  // test to see if we get a status: 202, when we update a meal
  */
  describe('Update Meals API', () => {
    it('should update a meal by id', (done) => {
      request(app)
        .put('/api/v1/meals/3')
        .send(Meal)
        .expect(202)
        .end(done);
    });

    // test if we get a status: 204 when the update id doesn't exist
    it('should return a 404 if meal id doesn\'t exist', (done) => {
      request(app)
        .put('/api/v1/meals/21')
        .send(Meal)
        .expect(404)
        .end(done);
    });
  });
});
