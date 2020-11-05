const express = require('express');
const router = express.Router();

router.post('like', async(req, res)=> {
    res.render('readStory');
})

module.exports = router
