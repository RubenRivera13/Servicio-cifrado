const express = require('express');

const cryptoController = require('../src/controllers/cryptoController');
const hashController = require('../src/controllers/hashController');
const passwordController = require('../src/controllers/passwordController');
const hmacController = require('../src/controllers/hmacController');

const { requireFields } = require('../middlewares/validate');

const router = express.Router();

router.post('/crypto/encrypt',
    requireFields(['text']), 
    cryptoController.encrypt);

router.post('/crypto/decrypto', 
    requireFields(['encrypted', 'iv', 'authTag']),
    cryptoController.decrypt);

router.post('/hash/sha256',
    requireFields(['text']),
    hashController.sha256);

router.post('/hash/verify',
    requireFields(['text', 'hash']), 
    hashController.verify);

router.post('/password/hash',
    requireFields(['password']), 
    passwordController.hash);

router.post('/password/verify',
    requireFields(['password', 'hash']), 
    passwordController.verify);

router.post('/hmac/sing',
    requireFields(['message']), 
    hmacController.sign);

router.post('/hmac/verify',
    requireFields(['message', 'hmac']), 
    hmacController.verify);

module.exports = router;
