const Router = require('express').Router
const Users = require('./model')
const router = new Router()

//this shows every dog i choose
router.get('/users', (req, res) => {
  const users = Users
    .findAll({
      attributes: ['id','email','dog']
    })
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the users. Please try again' })
    })
})

//this is not necessarry
router.get('/users/:id', (req, res) => {
  const users = Users
    .findById(req.params.id)
    .then((user) => {
      if (user) {
        res.json(user)
      } else {
        res.status(404)
        res.json({ message: 'User not found!' })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the user. Please try again' })
    })
})

//this is not necessarry
router.patch('/user/:id', (req, res) => {
  const users = User
    .findById(req.params.id)
    .then((user) => {
      if (user) {
        user.dog = req.body.dog
        user
          .save()
          .then((updatedUser) => {
            res.json(updatedUser)
          })
          .catch((err) => {
            res.status(422)
            res.json({ message: err.message })
          })
      } else {
        res.status(404)
        res.json({ message: 'Dog not found!' })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting dog. Please try again' })
    })
})

//this is for add Dog
router.post('/users', (req, res) => {
  const user= req.body

  Users.create(user)
    .then(entity => {
      res.status(201)
      res.json(entity)
  })
    .catch(err => {
      res.status(422)
      res.json({ message: err.message })
    })
  })

//this is not necessarry
router.put('/users/:id', (req, res) => {
  const userId = Number(req.params.id)
  const updates = req.body

  User.findById(req.params.id)
    .then(entity => {
      return entity.update(updates)
    })
    .then(final => {
      res.send(final)
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong`,
        error
      })
    })
})

//this is for dislike action
router.delete('/users/:id', (req, res) => {
  const userId = Number(req.params.id)

  User.findById(req.params.id)
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
