import request from 'supertest';
import expect from 'expect';
import Menu from '../data/menu.json';

import { app } from '../index';

describe('Menu API test', () => {
  /*
    should return the selected meal
    and user details
  */
  describe('Add Menu API test', () => {
    it('should add a menu for the day', (done) => {
      request(app)
        .post('/api/v1/menu')
        .send(Menu)
        .expect(201)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
        })        
        .end(done);
    });
  });

  /*
    should return all the menu available
  */
  describe('Get MENU API test', () => {
    it('should return all menu', (done) => {
      request(app)
        .get('/api/v1/menu')
        .expect(200)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
        })
        .end(done);
    });
  });
});
