import { Meal } from "../models/meal.js"

function index(req,res) {
  Meal.find({})
  .populate('creator')
  .sort({mealType:1})
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


function deleteMeal(req,res) {
  Meal.findById(req.params.id)
  .then(meal => {
    if (meal.creator.equals(req.user.profile._id)){
      meal.delete()
      .then(deletedMeal => {
        res.redirect(`/meals`)
      })
    } else {
      throw new Error('NOT AUTHORIZED')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meals')
  })
}


function edit(req,res) {
  Meal.findById(req.params.id)
  .then(meal => {
    res.render('meals/edit',{
      meal,
      title: "Edit Meal"
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/meals')
  })
}


function update(req,res) {
  Meal.findById(req.params.id)
  .then(meal => {
    if (meal.creator.equals(req.user.profile._id)){
      meal.updateOne(req.body)
      .then(updatedMeal => {
        res.redirect(`/meals`)
      })
    } else {
      throw new Error('Not Authorized')
    }
  })
  .catch (error => {
    console.log(error)
    res.redirect('/meals')
  })
}

export {
  index,
  newMeal as new,
  create,
  deleteMeal as delete,
  edit,
  update,
}