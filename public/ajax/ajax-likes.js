window.addEventListener("DOMContentLoaded", (e) => {
    const likeButton = document.getElementById('likeBtn');
likeButton.addEventListener('click', async(e) => {
    e.preventDefault();
    const storyId = e.story.id;
const res = await fetch('/read-a-story', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(like)
})
const story = await res.json();
likeButton.innerHTML = 'Liked'
})

})
