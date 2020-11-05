const express = require('express');
const router = express.Router();

router.post('/', async(req, res)=> {
    res.render('readStory');
})

module.exports = router
