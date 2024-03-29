/* NOTE :-  this file name allow to save data in mongdb */

use("CrudDb")

// console.log(db)
db.createCollection("courses")

// set  data in mongodb
db.courses.insertOne({    
    name:"ankush webdev",
    price:0,
    assignments: 12,
    project:415
})


// set  data in mongodb so many
db.courses.insertMany([
    {    
        name:"shyam webdev",
        price:12,
        assignments: 12,
        project:415
    },   
    {    
        name:"monu webdev",
        price:120,
        assignments: 12,
        project:415
    },   
    {    
        name:"ankush",
        price:0,
        assignments: 12,
        project:415
    },   
    {    
        name:"ankush dsff",
        price:0,
        assignments: 12,
        project:415
    },   
])


// read data
let a = db.courses.find({price:0})
// let a = db.courses.find({price:0}) it give only on database
// console.log(a)

// console.log(a.count())  // it give total item exit in mongodb
// console.log(a.toArray())


// updata data  in mongoDb
// db.courses.updateOne({price:0}, {$set:{price:100}}) // ye bus ek data ke price ko change kar denga jiski price 0 hogi
db.courses.updateMany({price:0}, {$set:{price:2000}}) // ye pure  data ke price ko change kar denga jiski price h ongi



// delete 
db.courses.deleteOne({price: 100})  // jiski price 100 hongi wo delete ho jayengi

db.courses.deleteMany({price: 100})  // jiski price 100 hongi wo delete ho jayengi