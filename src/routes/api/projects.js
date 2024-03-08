import express from 'express';
import ProjectsController from '#src/controllers/projectsController'
import authGard from '#src/middleware/authGard'
const router = express.Router();


router.get('/',ProjectsController.allProjects);

router.post('/',authGard.protect,ProjectsController.createProject);
router.put('/:id',authGard.protect,ProjectsController.updateProject);
router.delete('/:id',authGard.protect,ProjectsController.deleteProject);

export default router;