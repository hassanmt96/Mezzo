window.addEventListener('DOMContentLoaded', (e) => {
    let commentBtn = document.getElementById('commentBtn');
    commentBtn.addEventListener('click', async(e) => {
        e.preventDefault();
        const storyId = document.getElementById('story-Id').value;
        const comment = document.getElementById('commentBody').value
        const res = await fetch(`/stories/${storyId}/comment`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						// "Accept": "application/json",
					},
					body: JSON.stringify({comment: comment})
				});
        const jsonRes = await res.json();
        console.log(jsonRes);
        const comments = document.getElementById('comments');
        let commentsHtml = [];
        const returnedComments = Array.from(jsonRes)
        // console.log(returnedComments)
        returnedComments.forEach((comment) => {
            let html = `
            <div id='comments'>
                <div class='comment'>
                    <p>${comment.comment}</p>
                    <p class='commentDate'>Posted ${comment.createdAt}</p>
                </div>
            </div>`
            commentsHtml.push(html);
        });
        comments.innerHTML = ''
        comments.innerHTML = commentsHtml.join('');
    })
})
