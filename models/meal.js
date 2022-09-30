import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: {
    String, 
    // required,
  },
  mealType: {
    String, 
    enum: ['Breakfast','Lunch','Dinner','Snack'],
    // required,
  }, 
  description: {
    String,
    // required
  },
  creator: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true
})

const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal
}
