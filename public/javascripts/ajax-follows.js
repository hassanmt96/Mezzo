window.addEventListener("DOMContentLoaded", (e) => {
	// console.log('test');
	const followButton = document.getElementById("followBtn");
	followButton.addEventListener("click", async (e) => {
		e.preventDefault();
		const authorId = document.getElementById("authorId").value;
		const res = await fetch(`/users/${authorId}/follow`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(),
		});
        const isFollowed = await res.json();
        console.log(isFollowed)
		if (isFollowed === "following") {
			followButton.innerHTML = "Followed";
		} else {
			followButton.innerHTML = "Follow";
		}
	});
});
