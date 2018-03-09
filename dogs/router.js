const Router = require('express').Router
const Dogs = require('./model')
const router = new Router()

//this shows every dog i choose
router.get('/dogs', (req, res) => {
  const dogs = Dogs
    .findAll({
      attributes: ['userId','breed']
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

router.get('/dogs/:id', (req, res) => {
  const dogs = Dogs
    .findById(req.params.id)
    .then((dog) => {
      if (dog) {
        res.json(dog)
      } else {
        res.status(404)
        res.json({ message: 'Dog not found!' })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the dog. Please try again' })
    })
})

router.patch('/dogs/:id', (req, res) => {
  const dogs = Dogs
    .findById(req.params.id)
    .then((dog) => {
      if (dog) {
        dog.score = req.body.score
        dog
          .save()
          .then((updatedDog) => {
            res.json(updatedDog)
          })
          .catch((err) => {
            res.status(422)
            res.json({ message: err.message })
          })
      } else {
        res.status(404)
        res.json({ message: 'Player not found!' })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the player. Please try again' })
    })
})

//this is for add Dog
router.post('/dogs', (req, res) => {
  const dog = req.body

  Dogs.create(dog)
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
