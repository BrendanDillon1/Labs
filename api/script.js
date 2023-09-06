document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("posts-container");

  fetch("https://www.reddit.com/r/aww/.json")
    .then((response) => response.json())
    .then((data) => {
      let posts = data.data.children.slice(0, 10);

      posts.forEach((post) => {
        let postElement = document.createElement("div");
        postElement.className = "post";

        let titleElement = document.createElement("div");
        titleElement.className = "post-title";
        titleElement.innerText = post.data.title;

        let thumbnailElement = document.createElement("img");
        thumbnailElement.src = post.data.thumbnail;

        let linkElement = document.createElement("a");
        linkElement.href = `https://www.reddit.com${post.data.permalink}`;
        linkElement.className = "post-link";

        postElement.appendChild(titleElement);
        postElement.appendChild(thumbnailElement);
        postElement.appendChild(linkElement);
        postsContainer.appendChild(postElement);
      });
    });
});
