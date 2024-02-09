const { myName, myHobbies } = require('./multiple-exports');
const myFriendName = 'Alice';

module.exports.myName = myName;
module.exports.myFriendName = myFriendName;
// property names could be different from the variable names
module.exports.myGreatHobbies = myHobbies;
