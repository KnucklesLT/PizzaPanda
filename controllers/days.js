import { Day } from "../models/day.js"
import { Meal } from "../models/meal.js"

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




export{
  index
}