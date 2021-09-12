// hole landing page withoud the button :
const main = document.querySelector("main");
// card with a border left that will appear :
const card = document.getElementsByClassName("appearCard")[0];
// name and profession appear from left to right :
const presentation = document.getElementsByClassName("presentation")[0];
// button that will transition the page :
const btn = document.getElementsByClassName("rond")[0];

// function that animate the landing page :
const LoadingPage = () => {
  // waiting 500ms to show the page
  setTimeout(() => {
    card.classList.add("loaded");
    presentation.classList.add("appear");

    //waiting 1200ms to show the button
    setTimeout(() => {
      btn.classList.add("comeUp");
    }, 1200); //appear the button
  }, 500); // appear the page
};

// function that redirect to the home page :
const redirect = () => {
  document.location.href = "../home.html";
};

// function that animate the transition beetwin the landing page and the home page :
btn.addEventListener("click", () => {
  btn.classList.add("transition");
  main.classList.add("pageTransition");

  // waiting the transition to end to redirect to the main page
  setTimeout(() => {
    redirect();
  }, 1700);
});

// Animation on the load :
window.addEventListener("load", LoadingPage());
