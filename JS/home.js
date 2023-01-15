const browse = document.querySelector('.browse');
const navPages = document.querySelector('.nav-pages');
// console.log(navPages);
// console.log(browse)

browse.addEventListener('click', () => {
    navPages.classList.toggle('show');
})


// navPages.addEventListener('mouseover', () => {
//     navPages.classList.add('show');
// })