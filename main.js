// console.log('Hello!!!!!!!');
function firstOne(user) {
  return `Hello ${user}`;
}

function secondOne(user) {
  return `Howdy ${user}`;
}

function thirdOne(user, cb) {
  return cb(user);
}

thirdOne('Chie', firstOne);
thirdOne('Chie', secondOne);
