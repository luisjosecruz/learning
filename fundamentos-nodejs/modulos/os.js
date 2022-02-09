const os = require('os');
const { Serializer } = require('v8');

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus().length);
// console.log(os.constants);

const SIZE = 1024;

function kb(bytes) { return bytes / SIZE; }
function mb(bytes) { return kb(bytes) / SIZE; }
function gb(bytes) { return mb(bytes) / SIZE; }

// console.log(os.freemem());
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));

// console.log(gb(os.totalmem()));

// console.log(os.homedir());
// console.log(os.tmpdir());

// console.log(os.hostname());

// console.log(os.networkInterfaces());

console.table(os.cpus())
console.table(os.networkInterfaces())