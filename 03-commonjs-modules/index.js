const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const {
    myName: myOtherName,
    myFriendName,
    myGreatHobbies,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-export');

// Imports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

myHobbies.push('climbing');

// Imports from single-export
console.log(greetingFn);
greetingFn(myName);

// Imports from export-and-import
console.log(myOtherName);
console.log(myFriendName);
console.log(myGreatHobbies);
