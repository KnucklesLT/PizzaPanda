import { Day } from "../models/day.js"
import { Meal } from "../models/meal.js"
import { Profile } from "../models/profile.js"

function index(req,res) {
  Day.find({}).sort({ date : 1})
  .populate('breakfast lunch dinner snack')
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

function create(req,res) {
  Day.create(req.body)
  .then(day => {
    console.log(day)
    res.redirect('/days')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/days')
  })
}

export{
  index,
  newPlan as new,
  create,
}