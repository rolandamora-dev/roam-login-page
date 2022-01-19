const express = require('express');
const router = express.Router();
const { listUsers, getUser, addUser, editUser, deleteUser } = require('../controllers/user');
const { login } = require('../controllers/auth')
const { encrypt, protect } = require('../middleware/auth');

router.use(protect);

router.get('/', listUsers);
router.post('/', encrypt, addUser);

router.route('/:id')
  .get(getUser)
  .delete(deleteUser);

router.put('/:id', encrypt, editUser);


module.exports = router;