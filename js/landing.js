const presentation = document.getElementsByClassName('presentation')[0];
const card = document.getElementsByClassName('appearCard')[0];

const btn = document.getElementsByClassName('rond')[0];

const main = document.querySelector('main');


// redirect to the home page
const redirect = () => {
    document.location.href = '../home.html'
}


// button transtition
btn.addEventListener('click', () => {
    btn.classList.add('transition');
    main.classList.add('pageTransition');

    setTimeout(() => {
        redirect()

    }, 1700)

})


// Animation on the load
window.addEventListener('load', () => {
    card.classList.add('loaded');
    presentation.classList.add('appear');
    btn.classList.add('pageLoad')
})