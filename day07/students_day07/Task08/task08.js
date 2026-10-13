const links = document.querySelectorAll('a:not([target="_blank"])');

for (let i = 0; i < links.length; i++) {
    links[i].style.opacity = "0.5";
}