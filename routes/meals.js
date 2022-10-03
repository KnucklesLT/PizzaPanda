import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', mealsCtrl.index)

router.get('/new', isLoggedIn,mealsCtrl.new)


router.get('/:id/edit', isLoggedIn, mealsCtrl.edit)

router.post('/', isLoggedIn, mealsCtrl.create)

router.delete('/:id', isLoggedIn, mealsCtrl.delete)

router.put('/:id', isLoggedIn, mealsCtrl.update)


export {
  router
}
