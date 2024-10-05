const os = require ('os')

//console.log(os.uptime())

const currentOs = {
    name: os.type(),
    release: os.release(),
    uptime: os.uptime(), //in seconds
    totalMEm: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)