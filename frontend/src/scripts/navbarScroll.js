document.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollY = window.scrollY; // Get the vertical scroll position
  const opacity = Math.min(scrollY / 20, 1); // Increase opacity as you scroll down, max at 1
  navbar.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;

  const title = document.getElementById('title');
  title.style.color = scrollY > 13 ? '#000' : '#eee';
});