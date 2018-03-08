const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./users/router')
const randomRouter = require('./randomDogs/router')


const app = express()
  .use(cors())
  .use(bodyParser.json())



const port = process.env.PORT || 4001



app.listen(port, () => {
  console.log(`
  Server is listening on ${port}.

  Open http://localhost:${port}.

  to see the app in your browser.
    `)
})





app.use(userRouter)
app.use(randomRouter)
