import { Day } from "../models/day.js"
import { Meal } from "../models/meal.js"
import { Profile } from "../models/profile.js"

function index(req,res) {
  Day.find({}).sort({ date : 1})
  .then(days => {
    res.render('days/index', {
      title: 'View Planner',
      days,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newPlan(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('days/new', {
      title: 'Add a Plan',
      meals
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}



export{
  index,
  newPlan as new,
}