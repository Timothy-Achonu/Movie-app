const learnMore = document.querySelector('.learn-more');
const learnMoreInformation = document.querySelector('.learn-more-information');

learnMore.addEventListener('click', () => {
    learnMore.classList.add('hide')
    learnMoreInformation.classList.add('show-more');
})