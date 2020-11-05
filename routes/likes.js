const express = require('express');
const router = express.Router();

const likeButton = document.getElementById('likeBtn');
likeButton.addEventListener('click', (e) => {
    e.preventDefault();
    const storyId = e.story.id;
const res = await fetch('/read-a-story', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON. stringify(like)
})
const tweet = await res.json();
likeButton.innerHTML = 'Liked'
})

router.post('like', async(req, res)=> {
    res.render('readStory');
})

module.exports = router
