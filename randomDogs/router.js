const Router = require('express').Router
const randomDog = require('./model')
const router = new Router()

//this shows every dog i choose
router.get('/random', (req, res) => {
  const randomDogs = randomDog
    .findAll({
      attributes: ['id','url']
    })
    .then((randomDogs) => {
      res.json(randomDogs)
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the users. Please try again' })
    })
})

router.get('/random/:id', (req, res) => {
  const dog = randomDog
    .findById(req.params.id)
    .then((dog) => {
      if (dog) {
        res.json(dog)
      } else {
        res.status(404)
        res.json({ message: 'dog not found!' })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the product. Please try again' })
    })
})


router.post('/random', (req, res) => {
  const random = req.body

  randomDog.create(random)
    .then(entity => {
      res.status(201)
      res.json(entity)
  })
    .catch(err => {
      res.status(422)
      res.json({ message: err.message })
    })
  })

module.exports = router
