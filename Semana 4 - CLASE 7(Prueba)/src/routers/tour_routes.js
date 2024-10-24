import {Router} from 'express'
import { getAllTourController } from '../controllers/tour_controller.js'
const router = Router()

router.get('/tours', getAllTourController)




export default router

