const Router = require('express').Router
const dogs = require('./model')
const router = new Router()

//this shows every dog i choose
router.get('/dogs', (req, res) => {
  const dogs = dogs
    .findAll({
      attributes: ['id','userId','breed']
    })
    .then((dogs) => {
      res.json(dogs)
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the users. Please try again' })
    })
})


//this is for add Dog
router.post('/dogs', (req, res) => {
  const dog = req.body

  Users.create(dog)
    .then(entity => {
      res.status(201)
      res.json(entity)
  })
    .catch(err => {
      res.status(422)
      res.json({ message: err.message })
    })
  })


//this is for dislike action
router.delete('/dogs/:id', (req, res) => {
  const dogId = Number(req.params.id)

  Dog.findById(req.params.id)
  .then(entity => {
    return entity.destroy()
  })
  .then(_ => {
    res.send({
      message: 'The user was deleted succesfully'
    })
  })
  .catch(error => {
    res.status(500).send({
      message: `Something went wrong`,
      error
    })
  })
})


module.exports = router
