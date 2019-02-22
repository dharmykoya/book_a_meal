import request from 'supertest';

import { app } from '../index';

describe('API test', () => {
  it('should return Welcome to meal app', (done) => {
    request(app)
      .get('/')
      .expect('Welcome to meal app')
      .end(done);
  });
});
