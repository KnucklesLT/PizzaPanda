import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', mealsCtrl.index)

router.get('/new', mealsCtrl.new)

router.post('/', isLoggedIn, mealsCtrl.create)

export {
  router
}
