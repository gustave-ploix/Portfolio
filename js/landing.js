const btn = document.getElementsByClassName('rond')[0];

const main = document.querySelector('main');
console.log(main);

console.log(btn);

const redirect = () => {
    document.location.href = '../home.html'
}

btn.addEventListener('click', () => {
    btn.classList.add('transition');
    main.classList.add('pageTransition');

    setTimeout(() => {
        redirect()

    }, 1700)

})
