const toggle = document.getElementById("menu-btn");

const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    toggle.classList.add("display-block");
    nav.classList.toggle("display-block");
});

const headerSearchBtn = document.getElementById("header__search_btn");

const headerSearchInp = document.getElementById("header__search_inp");

headerSearchBtn.addEventListener("click", () => {
    // headerSearchBtn.classList.add("header__inp_on");
    headerSearchInp.classList.toggle("header__inp_on");
});