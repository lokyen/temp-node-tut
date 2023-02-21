//Os module
//looking for built in module
//have access to all methods
const os = require('os');
//os. a bunch of methods appear

//info about current user
const user = os.userInfo();
//console.log(user);
console.log(user);
//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);

//properties of object
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);