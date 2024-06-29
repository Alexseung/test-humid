let icon = document.getElementById('icon');
let news = document.getElementById('news');
icon.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = '/dark theme icon/sun.png';
    news.textContent = 'BUT I GOT A NEW DEHUMIDIFIER!';
    news.classList.add('nice');
  } else {
    icon.src = '/dark theme icon/moon.png';
    news.textContent = '...humid';
    news.classList.remove('nice');
  }
});
