import express from 'express';
import users from './users.js';
import projects from './projects.js';
import capacibilities from './capacibilities.js';
import auth from './auth.js';

const router = express.Router();

// api/v1/
router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});



// api/v1/ping 
router.use('/users', users);
router.use('/capacibilities', capacibilities);
router.use('/projects', projects);
router.use('/auth', auth);

export default router;
