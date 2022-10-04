import { Router } from 'express'
import * as daysCtrl from '../controllers/days.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, daysCtrl.index)

router.get('/new', isLoggedIn, daysCtrl.new)

// router.post('/', isLoggedIn, daysCtrl.create)
export {
  router
}
