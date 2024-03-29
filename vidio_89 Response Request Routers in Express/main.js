const express = require('express')
const app = express()
const port = 3000


const blog = require('./routes/blog') // import for routes of blog 
// const router = require('./routes/blog')


app.use(express.static("public"))
app.use('/blog', blog)  // url mai blog se start hua ho blog folder handle aur run karenga


app.get('/', (req, res) => {
    console.log('Hey its a get request')  // this show in terminal
    res.send('Hello World! get')  // this window screen
})

app.post('/', (req, res) => {
    console.log('Hey its a Post request')   // this show in terminal
  res.send('Hello World! post')  // this show on console screen of window screen
})

app.put('/', (req, res) => {
    console.log('Hey its a Put request')   // this show in terminal
    res.send('Hello World! put')        // this show on console screen of window screen
})

// serve html file diarect
app.use('/index',(req,res)=>{
    console.log('Hey its a use request and index.html')   // this show in terminal
    // res.send('Hello World! index.html file')        // this show on  window screen
    console.log({root:__dirname})  // it give diarectory name that means folder name ['vidio_89 Response Request Routers in Express']
    res.sendFile('templates/index.html',{root: __dirname})  // it show index.html file on window screen 

})

// json use for api
app.get('/api', (req, res) => {
    res.json({a:1, b:2, c:3, d:4, name: ['ankush','shyam','monu']})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})