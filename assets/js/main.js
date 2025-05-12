// Create a single card, e.g. for a post link
function createCard(post) {
  const template = document.getElementById("post-card-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector("a").href = post.url;
  clone.querySelector("h2").textContent = post.title;
  clone.querySelector(".post-meta").textContent = post.date;

  if (post.thumbnail) {
    const img = clone.querySelector("img");
    img.src = post.thumbnail;
    img.alt = `${post.title} thumbnail`;
  } else {
    clone.querySelector("img")?.remove();
  }

  if (post.excerpt && post.excerpt !== '') {
    clone.querySelector(".post-excerpt").textContent = post.excerpt;
  } else {
    clone.querySelector(".post-excerpt")?.remove();
  }

  if (post.tags && post.tags.length) {
    const tagList = clone.querySelector(".tag-list");
    tagList.style.display = "";

    post.tags.forEach(tag => {
      const tagEl = document.createElement("li");
      tagEl.className = "tag";
      tagEl.textContent = tag;
      tagList.appendChild(tagEl);
    });
  }

  return clone;
}

// Populate "More Posts" grid, e.g. in post.html
document.addEventListener("DOMContentLoaded", () => {
  const rawData = document.getElementById("all-posts-data");
  if (!rawData) return;

  const container = document.querySelector(".related-posts-grid");
  if (!container) return;

  const allPosts = JSON.parse(rawData.textContent);
  const currentUrl = window.location.pathname.replace(/\/$/, "");

  // Exclude current post
  const others = allPosts.filter(post => post.url.replace(/\/$/, "") !== currentUrl);

  // Pick two at random
  const shuffled = others.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 2);

  selected.forEach(post => {
    container.appendChild(createCard(post));
  });
});
