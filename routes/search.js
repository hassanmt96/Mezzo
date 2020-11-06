const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { asyncHandler, handleValidationErrors } = require('../utils');
const { Story } = require('../db/models');
const storyRepo = require('../public/javascripts/searchquery');

router.use(bodyParser.urlencoded({ extended: false }));

router.get(`/stories`, asyncHandler(async(req, res) => {
    let stories;
    let error = '';
    try {
      stories = await storyRepo.searchStories(`%${req.query.term}%`);
    } catch (e) {
      console.error(e);
      error = `An error ocurred that reads "${e.message}". Check the console for more details.`;
    }
    res.render('index.pug', {//check this line check which pug file
        listTitle: 'Search Results',
        error,
        stories
    });
  }));



module.exports = router;
