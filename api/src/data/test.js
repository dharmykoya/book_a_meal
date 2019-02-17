module.exports.add = (x, y) => x + y;

module.exports.square = x => x * x;

module.exports.asyncAdd = ((a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
});

module.exports.asyncSquare = ((x, callback) => {
  setTimeout(() => {
    callback(x * x);
  }, 1000);
});

module.exports.setName = ((user = {}, fullName) => {
  [user.firstName, user.lastName] = fullName.split(' ');
  return user;
});
