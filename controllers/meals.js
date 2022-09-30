import { Meal } from "../models/meal.js"

function index(req,res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/index', {
      meals,
      title: 'All Meals'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}


function newMeal(req, res) {
  res.render('meals/new', {
    title: 'Add Meal'
  })
}


function create(req,res) {
  req.body.creator = req.user.profile._id
  for(let key in req.body){
    if(req.body[key] === '') delete req.body[key]
  }
  Meal.create(req.body)
  .then(meal => {
    res.redirect('/meals')
  })
  .catch(error => {
    console.log(error)
    res.redirect('meals')
  })
}

export {
  index,
  newMeal as new,
  create,
}