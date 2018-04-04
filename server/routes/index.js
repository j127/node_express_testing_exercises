const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    const userAgent = req.headers['user-agent'] || 'none';
    if (req.accepts('html')) {
        res.render('index', { userAgent: userAgent });
    } else {
        res.type('text');
        res.send(userAgent);
    }
});

module.exports = router;
