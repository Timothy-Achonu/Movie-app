const listItems = document.querySelectorAll('.plus')

listItems.forEach( (element) => {
    element.addEventListener('click', () => {
        element.parentElement.parentElement.classList.
        toggle('show-question')
    })
})

// Login page



//Home page

