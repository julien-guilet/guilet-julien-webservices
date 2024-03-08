import express from 'express';
import users from './users.js';
import capacibilities from './capacibilities.js';

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


export default router;
