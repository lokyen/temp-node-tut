//commonjs, every file is module (by default)
//modules - encapsulated code (only share minimum)

//to access export object
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
//function inside a module when you import a module you are actually invoking it 
//console.log(data);

/*
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
*/