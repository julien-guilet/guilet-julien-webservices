import express from 'express';
import capacibilitiesController from '#src/controllers/capacibilitiesController'
import authGard from '#src/middleware/authGard'
const router = express.Router();


router.get('/',authGard.protect,capacibilitiesController.allCapacibilities);

router.post('/',authGard.protect,capacibilitiesController.addCapacibilities);

router.put('/:id',authGard.protect,capacibilitiesController.updateCapacibilities);
router.delete('/:id',authGard.protect,capacibilitiesController.deleteCapacibilities);

export default router;