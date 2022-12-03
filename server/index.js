//express code
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


//use this area for controllers variables
const postsController = require('./controllers/posts');
const peopleController = require('./controllers/people');




//allow cross origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();

})

//serve static files
app.use(express.static('./client/dist'));

//use json
app.use(express.json());

//use this area for controllers
app.use('/api/v1/posts', postsController)
app.use('/api/v1/people', peopleController)



//root route
app.get('/', (req, res) => {
  res.send('Exercise is good for you!');
})

//use this area for controllers routes

//error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something broke!');
})


//star route
//im not sure if this is necessary or if i should just send them back to main page
// app.get('*', (req, res) => {
//   res.send('404: Page not found');
// })


// 418 I'm a teapot
app.use((req, res, next) => {
  res.status(418).send("I'm a teapot");
}) 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})