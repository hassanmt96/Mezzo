window.addEventListener("DOMContentLoaded", (e) => {
	// console.log('test');
	const likeButton = document.getElementById("likeBtn");
	likeButton.addEventListener("click", async (e) => {
		e.preventDefault();
		const storyId = document.getElementById("story-Id").value;
		const res = await fetch(`/stories/${storyId}/like`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(),
		});
		const isLiked = await res.json();
		if (!isLiked) {
			likeButton.innerHTML = "Liked";
		} else {
			likeButton.innerHTML = "Like";
		}
	});
});
