
const welcome = document.querySelector(".welcome");
const menu = document.querySelector(".menu");
const fixed = document.querySelector(".fixed");

welcome.addEventListener("click", () => {
    welcome.textContent = "Have a Good Time!";
});

menu.addEventListener("click", () => {
    if (fixed.style.display == 'none') {
        fixed.style.display = 'block';
      } else {                    
        fixed.style.display = 'none';
      }        
  });


