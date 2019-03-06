// import request from 'supertest';
// import expect from 'expect';
// import menus from '../data/menu.json';
// import users from '../data/user.json';

// import { app } from '../index';

// let token = '';


// describe('test user login', () => {
//   it('should login a user', (done) => {
//     request(app)
//       .post('/api/v1/auth/login')
//       .send(users.user)
//       .expect(200)
//       .expect((res) => {
//         expect(res.body)
//           .toBeA('object');
//         expect(res.body.data)
//           .toBeA('object');
//         expect(res.body.status)
//           .toBe(200);
//       })
//       .end((err, res) => {
//         if (err) return done(err);
//         token = `Bearer ${res.body.data.token}`;
//         done();
//         return done;
//       });
//   });
// });


// describe('Menu endpoints test', () => {
//   /*
//   // test for fetch all menu API
//   // test to see if the res body is an object
//   // test to see if the response data is an object and if it includes required keys
//   */
//   describe('Get All Menus ', () => {
//     it('should return all menu', (done) => {
//       request(app)
//         .get('/api/v1/menu')
//         .set('Authorization', token)
//         .expect(200)
//         .expect((res) => {
//           expect(res.body).toBeA('object');
//           expect(res.body.data).toBeA('object');
//           expect(res.body.data.menus[0]).toBeA('object');
//         //   .toIncludeKey(['id', 'userId', 'name', 'description']);
//         })
//         .end(done);
//     });
//   });


//   describe('Get All user Menus', () => {
//     it('should return all user menu', (done) => {
//       request(app)
//         .get('/api/v1/menu/admin')
//         .set('Authorization', token)
//         .expect(200)
//         .expect((res) => {
//           expect(res.body).toBeA('object');
//           expect(res.body.data).toBeA('object');
//           expect(res.body.data.menus[0]).toBeA('object');
//         //   .toIncludeKey(['id', 'userId', 'name', 'description']);
//         })
//         .end(done);
//     });
//   });


//   /*
//   // test for Add menu API
//   // test to see if the res body is an object
//   // test to see if the response data is an object and if it includes required keys
//   */
//   describe('Add Menu API Test', () => {
//     it('should add menus for the day', (done) => {
//       request(app)
//         .post('/api/v1/menu')
//         .send(menus.newMenu)
//         .set('Authorization', token)
//         .expect(201)
//         .expect((res) => {
//           expect(res.body).toBeA('object');
//           expect(res.body.data.message).toBe('Menu created successfully');
//           expect(res.body.data.meal).toBeA('object');
//         })
//         .end(done);
//     });
//   });


//   // /*
//   // // tests for update a meal API
//   // */
//   describe('Update Menus API', () => {
//     // test to see if we get a status: 202, when we update a meal
//     it('should update a menu by id', (done) => {
//       request(app)
//         .put('/api/v1/menu/1')
//         .set('Authorization', token)
//         .send(menus.updateMenu)
//         .expect(202)
//         .expect((res) => {
//           expect(res.body).toBeA('object');
//           expect(res.body.data.message).toBe('Menu updated successfully');
//           expect(res.body.data.menu).toBeA('object');
//         })
//         .end(done);
//     });

//     // test if we get a status: 400 when the update id doesn't exist
//     it('should return a 400 if menu id doesn\'t exist', (done) => {
//       request(app)
//         .put('/api/v1/menu/50')
//         .set('Authorization', token)
//         .send(menus.updateMenu)
//         .expect(400)
//         .end(done);
//     });
//   });

//   // /*
//   // // tests for delete a meal API
//   // */
//   describe('Delete Menu API', () => {
//     // test to see if we get a status: 202, when we delete a menu
//     it('should delete a meal by id', (done) => {
//       request(app)
//         .delete('/api/v1/menu/1')
//         .set('Authorization', token)
//         .expect(202)
//         .end(done);
//     });

//     //  test if we get a status: 400 when the delete id doesn't exist
//     it('should return a 400 if menu id doesn\'t exist', (done) => {
//       request(app)
//         .delete('/api/v1/menu/50')
//         .set('Authorization', token)
//         .expect(400)
//         .end(done);
//     });
//   });
// });