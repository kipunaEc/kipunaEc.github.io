const params = new URLSearchParams(window.location.search);
const nombrePost = params.get("post");

fetch(`data/blog/${nombrePost}`)
  .then(res => res.text())
  .then(md => {
    document.getElementById("post").innerHTML = marked.parse(md);
  });
