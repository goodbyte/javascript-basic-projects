{
  const about = document.querySelector('.about');
  const btns = document.querySelectorAll('.tab-btn');
  const articles = document.querySelectorAll('.content');

  about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    
    if (!id) return;

    const element = document.getElementById(id);

    btns.forEach((btn) => btn.classList.remove('active'));
    e.target.classList.add('active');

    articles.forEach((article) => article.classList.remove('active'));
    element.classList.add('active');
  });
}
