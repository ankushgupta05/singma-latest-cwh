const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))  // this import for use static html pages and it is build-in mildelware

// app.get or app.post or app.put or app.delete(path, headler)
app.get('/', (req, res) => {
  res.send('Hello World!')  // this show on window output screen
})

app.get('/about', (req, res) => {
  res.send('about page')    // this show on window output screen
})

app.get('/contact', (req, res) => {
  res.send('contact page')    // this show on window output screen
})

app.get('/blog', (req, res) => {
  res.send('blog page')
})

//For URl :   http://localhost:3000/blog/ankushgupta?node-dark?node-dark?region-in
app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug}
    console.log(req.params)  // Will output { slug: 'ankushgupta' }
    console.log(req.query)  // Will output { 'node-dark?node-dark?region-in': '' }

  res.send(`The ${req.params.slug}`)
})

/*  // this is also run

app.get('/blog/:slug/:second', (req, res) => {
    // logic to fetch {slug}
    res.send(`The slug is :  ${req.params.slug} and second slug is :  ${req.params.second}` )
})
*/



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/* 
// Public folder always can be access from any where
*/