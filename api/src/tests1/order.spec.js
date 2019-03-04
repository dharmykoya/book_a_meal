import request from 'supertest';
import expect from 'expect';
import Order from '../data1/order.json';

import { app } from '../index1';

describe('Order API test', () => {
  /*
    should return the selected meal
    and user details
  */
  describe('Add order API', () => {
    it('should add a meal order', (done) => {
      request(app)
        .post('/api/v1/orders/')
        .send(Order)
        .expect(201)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
        })
        .end(done);
    });
  });


  /*
    should update the selected meal id
    and return a status of 202
  */
  describe('Update order API', () => {
    it('should return a status of 202', (done) => {
      request(app)
        .put('/api/v1/orders/1')
        .send(Order)
        .expect(202)
        .end(done);
    });

    // test to return 404 if the id doesn;t exist
    it('should return 404', (done) => {
      request(app)
        .put('/api/v1/orders/24')
        .send(Order)
        .expect(404)
        .end(done);
    });

    /*
    should return the orders available
    */
    describe('Get all the orders', () => {
      it('should return a status of 200', (done) => {
        request(app)
          .get('/api/v1/orders/')
          .expect(200)
          .end(done);
      });
    });
  });
});
