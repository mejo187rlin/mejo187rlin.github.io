var menuBurger = document.getElementById("menu-burger");
var menuClose = document.getElementById("close-menu");
var mobileNav = document.getElementById("mobile-nav");

menuBurger.addEventListener("click", function() {
    mobileNav.style.right = "0";
});

menuClose.addEventListener("click", function() {
    mobileNav.style.right = "-100%";
});

const blob = document.getElementById("followmouse");
setInterval(() => {
    window.onpointermove = event => { 
        const { clientX, clientY } = event;
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY + window.pageYOffset}px`
        }, { duration: 200, fill: "forwards" });
    }
}, 10);


