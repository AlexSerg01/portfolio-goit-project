const MENU_BUTTON = document.querySelector(".header-menu-button");
const MENU_LIST = document.querySelector(".header-menu-list");

let menuCount = 1;

MENU_BUTTON.addEventListener("click", (event) => {
    event.preventDefault();
    menuCount += 1;
    if (menuCount % 2 === 0) {
        MENU_LIST.classList.add("menu-is-visible");
    } else {
        MENU_LIST.classList.remove("menu-is-visible");
    }
});

MENU_LIST.addEventListener("click", (event) => {
    menuCount += 1;
    MENU_LIST.classList.remove("menu-is-visible");
});