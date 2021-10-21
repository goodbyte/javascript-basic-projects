{  
  const preloader = document.querySelector('.preloader');
  const btn = document.querySelector('.switch-btn');
  const video = document.querySelector('.video-container');

  btn.addEventListener('click', () => {
    btn.classList.toggle('slide');

    if (video.paused) video.play();
    else video.pause();
  });

  window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
  });
}
