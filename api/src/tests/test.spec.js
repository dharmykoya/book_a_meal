import expect from 'expect';
import Test from '../data/test';

it('should add two numbers', () => {
  const res = Test.add(3, 4);
  expect(res).toBe(7).toBeA('number');
  // if (res !== 7) {
  //   throw new Error(`expected 7, but got ${res}`);
  // }
});

it('should square a number', () => {
  const res = Test.square(3);
  expect(res).toBe(9).toBeA('number');
});

 it('should async add two numbers', (done) => {
  Test.asyncAdd(3, 4, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should async square a number', (done) => {
  Test.asyncSquare(3, (square) => {
    expect(square).toBe(9).toBeA('number');
    done();
  });
});


it('should set firstName and lastName', () => {
  const user = { location: 'lagos', age: 23 };
  const res = Test.setName(user, 'Andrew Dang');
  // expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: 'Andrew',
    lastName: 'Dang',
  });
});
