import { Meal } from "../models/meal.js"

function index(req,res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/index', {
      meals,
      title: 'All Meals'
    })
  })
}

export {
  index
}