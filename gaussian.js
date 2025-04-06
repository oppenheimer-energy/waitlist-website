const menuBar = document.getElementById('menu-bar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // If the page is scrolled more than 50px
        menuBar.style.backdropFilter = 'blur(10px)'; // Apply the blur effect
    } else {
        menuBar.style.backdropFilter = 'blur(0px)'; // Remove the blur effect
    }
});
