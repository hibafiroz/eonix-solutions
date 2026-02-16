// The os module provide information about operating system
// No need to install just use as

 const os = require('os');

// VARIOUS MATHODS ARE -

console.log(' Platform:', os.platform()); 
//return os platform(linux,window,mac)

console.log('Architecture:', os.arch()); 
 //return cpu architecture

console.log('CPU Cores:', os.cpus().length); 
 //returns array of all cpu cores and length gives number of cpu cores

console.log(' Total Memory:', os.totalmem());
 //returns total RAM in bytes

console.log('Free Memory:', os.freemem());  
//Returns available RAM in bytes

console.log('Uptime:', os.uptime(), 'seconds'); 
// Returns how long the system has been running (in seconds)

console.log('Home Dir:', os.homedir()); 
// Returns the current user's home directory

console.log(' User Info:', os.userInfo());
 // Returns info about the current logged-in user
