
const welcome = document.querySelector(".welcome");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".icon");
const fixed = document.querySelector(".fixed");
const action = document.querySelector(".action");
const box2 = document.querySelector(".box2");

welcome.addEventListener("click", () => {
    welcome.textContent = "Have a Good Time!";
});

menu.addEventListener("click", () => {   
    fixed.style.display = 'block';
});

icon.addEventListener("click", () => {   
    fixed.style.display = 'none';
});

action.addEventListener("click", () => {   
    box2.style.display = 'block';
});


