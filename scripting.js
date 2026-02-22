// ---------title typing----------
let txt="Every date tells a story...";
var i=0;
let forward=true;
const text=document.getElementById("typing");
(function type(){
    text.textContent=txt.slice(0,i);
    if(forward){
        i++;
        if(i==txt.length){
            forward=false;
            setTimeout(type,2200);
            return;
        }
    }
    else{
        i--;
        if(i==0)
            forward=true;
    }
    setTimeout(type,forward?150:120);
})();
// ----------------------------------------
// ------------ nav display settings---
document.addEventListener("DOMContentLoaded", () => {
    showHome();  
});
function showCategory() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("aboutSection").style.display = "none";
    document.getElementById("categorySection").style.display = "block";
    setActive("categoryLink");
}
function showHome() {
    document.getElementById("categorySection").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("aboutSection").style.display = "none";
    document.getElementById("homeSection").style.display = "block";
    setActive("homeLink");
}
function showQuiz() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("aboutSection").style.display = "none";
    document.getElementById("categorySection").style.display = "none";
    setActive("quizLink");
} 
function showAbout() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("categorySection").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("aboutSection").style.display = "block";
    setActive("aboutLink");
}
function setActive(activeId) {
    const links = document.querySelectorAll("header nav a");
    links.forEach(link => link.classList.remove("active"));
    document.getElementById(activeId).classList.add("active");
}
// // -----humberger---
function toggleMenu() {
    const nav = document.querySelector("header nav");
    const burger = document.querySelector(".hamburger");
    const typing = document.getElementById("typing");
    if (typing) typing.style.display = "none";
    nav.classList.toggle("active");
    burger.innerHTML = nav.classList.contains("active") ? "✕" : "☰";
}
// --------------------------scroll btn----------
document.addEventListener("DOMContentLoaded", function () {

    const scrollBtn = document.getElementById("scrollBtn");
    const categorySection = document.getElementById("categorySection");

    window.addEventListener("scroll", function () {

        const isCategoryVisible =
            window.getComputedStyle(categorySection).display !== "none";

        if (isCategoryVisible && window.scrollY > 50) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }

    });

    scrollBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
// -----------home page--------
// --------------current date----------
let d = document.getElementById("date");

function updateDate(){
    const now = new Date();
    const options = {
        weekday:'long',
        day:'numeric',
        month:'long',
        year:'numeric'
    };
    d.innerText = now.toLocaleDateString('en-IN', options);
}
updateDate();
// -----

// -----------------home tag line---
const phrases = ["Past", "Present", "Future"];
let currentPhrase = 0;
let currentLetter = 0;
const typingElement = document.getElementById("type");

function typePhrase() {
  if (currentLetter <= phrases[currentPhrase].length) {
    typingElement.innerHTML = phrases[currentPhrase].substring(0, currentLetter);
    currentLetter++;
    setTimeout(typePhrase, 300);
  } else {
    // Pause before next phrase
    setTimeout(() => {
      currentLetter = 0;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      typePhrase();
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typePhrase();
});