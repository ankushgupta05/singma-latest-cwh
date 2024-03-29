const fs = require('fs')
console.log(fs)

/* 
console.log("starting")
fs.writeFileSync("ankush.txt",'Ankush Gpta is Here') // ye execution hone ke baad hi compiler aage jayenga
console.log("End")
*/

console.log("starting")
fs.writeFile("ankush2.txt",'Ankush Gpta is Here22', ()=>{  // ye execution End ke  baad mai honga
    fs.readFile('ankush2.txt',(error,data)=>{
        console.log(error, data.toString())
    })

}) 

console.log("End")
