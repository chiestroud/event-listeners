console.log('Hello!!!!!!!');

const firstObj = {};


const user = {
  username: 'biz.markie',
  password: 'abc1234',
  lovesJavascript: true,
  favoriteNumber: 42, // some language requires comma after the last one
}

// DOT NOTATION
// Get values out of an object
console.log(user.lovesJavascript);
console.log(user.username);

// BRACKET NOTATION
// const password = 'password';
// console.log(user[password]);
// console.log(user['username']);
// // it has to be string, variable or number
// console.log(user['favoriteNumber']);
// const favoriteNumber = 'favoriteNumber';
// console.log(user[favoriteNumber]);
// console.log(user.favoriteNumber);

// ASSIGNING VALUES 

const newUser = {
  isNew: true,
}

// newUser.username = 'fresh.prince';
// newUser[1] = 'abcd1234';
// newUser['passowrd'] = 'abc1234';
// console.log(newUser);


// METHODS
const newObject = {
  username: 'Chie',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
    // saying this object and find username
  }
}
// newObject.username = 'Aja';
// newObject.sayHello();

// ITERATE OVER AN OBJECT
const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
}

for (let key in userTwo) {
  // console.log(key); // keys
  console.log(userTwo[key]); // values
  // console.log(userTwo.key); // this will not work you have to use bracket notation
}
