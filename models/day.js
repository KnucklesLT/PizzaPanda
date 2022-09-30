import mongoose from 'mongoose'

const Schema = mongoose.Schema

const daySchema = new Schema({
  date: {
    Date, 
    required,
  },
  breakfast: { 
    type: Schema.Types.ObjectId, 
    ref: 'Meal' 
  }, 
  lunch: { 
    type: Schema.Types.ObjectId,
    ref: 'Meal' 
  },
  dinner: { 
    type: Schema.Types.ObjectId, 
    ref: 'Meal' 
  },
  snack: { 
    type: Schema.Types.ObjectId, 
    ref: 'Meal' 
  },
}, {
  timestamps: true
})

const Day = mongoose.model('Day', daySchema)

export {
  Day
}
