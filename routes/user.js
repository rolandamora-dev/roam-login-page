const express = require('express');
const router = express.Router();
const { listUsers, getUser, addUser, editUser, deleteUser } = require('../controllers/user');
const { login } = require('../controllers/auth')
const { encrypt, protect } = require('../middleware/auth');

router.use(protect);

router.get('/', listUsers);
router.post('/', addUser);

router.route('/:id')
  .get(getUser)
  .delete(deleteUser);

router.put('/:id', editUser);


module.exports = router;