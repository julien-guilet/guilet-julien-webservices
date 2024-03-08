import express from 'express';
import capacibilitiesController from '#src/controllers/capacibilitiesController'
const router = express.Router();


router.get('/',capacibilitiesController.allCapacibilities);

router.post('/',capacibilitiesController.addCapacibilities);

router.put('/:id',capacibilitiesController.updateCapacibilities);
router.delete('/:id',capacibilitiesController.deleteCapacibilities);

export default router;