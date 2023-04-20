
const fs = require('fs');

const rs = fs.createReadStream('lorem.txt')
const ws = fs.createWriteStream('new-lorem.txt');

rs.on('data', (datachunk)=>{
    ws.write(datachunk)
})

//alternate method

rs.pipe(ws)