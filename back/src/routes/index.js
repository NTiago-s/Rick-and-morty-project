//* controllers
const { getCharById } = require('../controllers/getCharById');
const { postUser } = require('../controllers/postUser');
const { Login } = require('../controllers/Login');
const { postFav } = require('../controllers/postFav');
const { deleteFav } = require('../controllers/deleteFav');
//* express config
const express = require('express')
const router = express.Router();

router.get('/character/:id', getCharById);
router.get('/login', Login);
router.post('/login', postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = {
    router,
}
