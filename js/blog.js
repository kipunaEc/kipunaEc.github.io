fetch('data/blog/posts.json')
  .then(res => {
    if (!res.ok) {
      throw new Error("No se pudo cargar posts.json");
    }
    return res.json();
  })
  .then(posts => {
    const lista = document.getElementById("lista-posts");

    posts.forEach(post => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="post.html?post=${post.archivo}">${post.titulo}</a>`;
      lista.appendChild(li);
    });
  })
  .catch(error => {
    console.error(error);
  });
