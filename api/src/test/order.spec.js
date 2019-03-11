import request from 'supertest';
import expect from 'expect';
import Order from '../data/order.json';
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

describe('Order API test', () => {
  /*
    should return the selected meal
    and user details
  */
  describe('Add order API', () => {
    it('should add a meal order', (done) => {
      request(app)
        .post('/api/v1/orders/checkout')
        .send(Order.newOrder)
        .expect(201)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.createdOrder)
            .toBeA('object');
          expect(res.body.createdOrder.message)
            .toBe('order created');
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

    //     /*
    //     should return the orders available
    //     */
    //     describe('Get all the orders', () => {
    //       it('should return a status of 200', (done) => {
    //         request(app)
    //           .get('/api/v1/orders/')
    //           .expect(200)
    //           .end(done);
    //       });
    //     });
  });
});
