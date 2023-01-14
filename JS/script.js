const listItems = document.querySelectorAll('.plus')

listItems.forEach( (element) => {
    element.addEventListener('click', () => {
        element.parentElement.parentElement.classList.
        toggle('show-question')
    })
})

// Login page
const learnMore = document.querySelector('.learn-more');
const learnMoreInformation = document.querySelector('.learn-more-information');

learnMore.addEventListener('click', () => {
    learnMore.classList.add('hide')
    learnMoreInformation.classList.add('show-more');
})