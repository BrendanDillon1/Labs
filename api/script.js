document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("posts-container");

  fetch("https://www.reddit.com/r/aww/.json")
    .then((response) => response.json())
    .then((data) => {
      const posts = data.data.children.slice(1, 11);

      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.className = "post";

        const titleElement = document.createElement("div");
        titleElement.className = "post-title";
        titleElement.innerText = post.data.title;

        const thumbnailElement = document.createElement("img");
        thumbnailElement.src = post.data.thumbnail;

        const linkElement = document.createElement("a");
        linkElement.href = `https://www.reddit.com${post.data.permalink}`;
        linkElement.className = "post-link";
        linkElement.target = "_blank";
        linkElement.innerText = "view on Reddit";

        postElement.appendChild(titleElement);
        postElement.appendChild(thumbnailElement);
        postElement.appendChild(linkElement);
        postsContainer.appendChild(postElement);
      });
    });
});
