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
						"Accept": "application/json",
					},
					body: JSON.stringify({comment: comment})
				});
        const jsonRes = await res.json();
        console.log(jsonRes);
        // const comments = document.getElementById('comments');
        // let commentsHtml = [];
        // Array.from(res).forEach((comment) => {
        //     let html = `<p>${comment.comment}</p>`
        //     commentsHtml.push(html);
        // });
        // comments.innerHTML = commentsHtml.join('');
    })
})
