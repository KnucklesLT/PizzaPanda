import { Router } from 'express'
import * as daysCtrl from '../controllers/days.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, daysCtrl.index)

router.get('/new', isLoggedIn, daysCtrl.new)

router.get('/:id/edit', isLoggedIn, daysCtrl.edit)

router.post('/', isLoggedIn, daysCtrl.create)

router.delete('/:id', isLoggedIn, daysCtrl.delete)

export {
  router
}
