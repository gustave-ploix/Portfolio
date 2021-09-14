const secondPage = document.getElementsByClassName('pushElement')[0];


document.addEventListener('DOMContentLoaded', (e) => {
    document.addEventListener('scroll', (e) => {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;

        let modifierToAppear = 1;
        let modifierToDisappear = 20;

        if(currentScroll + modifierToAppear > documentHeight) {
            console.log("you're at the bottom");
            secondPage.classList.add('visible')
        }

        if(currentScroll + modifierToDisappear < documentHeight) {
            console.log("you're not at the bottom");
            secondPage.classList.remove('visible')
        }

    })
})