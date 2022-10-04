import { Types } from "mongoose"
import { Day } from "../models/day.js"
import { Meal } from "../models/meal.js"
import { Profile } from "../models/profile.js"

function index(req,res) {
  Profile.findById(req.user.profile._id)
  .populate({
    path: 'plan', 
    model: 'Day',
    options:{
      sort: {
        date: 1
      }
    },
    populate: {
      path: 'breakfast lunch dinner snack',
      model: 'Meal'
    }
  })
  .then(profile => {
    res.render('days/index', {
      title: 'View Planner',
      profile
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
  Profile.findById(req.user.profile._id)
  .then(profile => {
    Day.create(req.body)
    .then(day => {
      profile.plan.push(day)
      profile.save()
      console.log(day)
      res.redirect('/days')
    })

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