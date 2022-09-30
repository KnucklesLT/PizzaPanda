import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: {
    type: String, 
    required: true,
  },
  mealType: {
    type: String, 
    enum: ['Breakfast','Lunch','Dinner','Snack'],
    required: true,
  }, 
  description: {
    type: String,
    required:true,
  },
  creator: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true
})

const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal
}
