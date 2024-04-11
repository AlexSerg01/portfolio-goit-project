const IMGS = document.querySelectorAll(".CoversImgContainer")
const IMG_CONTAINER = document.querySelector(".CoverBgContainer")

// ====================================================

window.addEventListener("scroll", coversShowAnimation)

// ====================================================

function coversShowAnimation() {
    if (ifCoversInVievport(IMG_CONTAINER)) {
        IMGS.forEach(elem => elem.classList.add("AnimationOn"))
    } else {
        IMGS.forEach(elem => elem.classList.remove("AnimationOn"))
}
}

function ifCoversInVievport(elem) {
    const position = elem.getBoundingClientRect()
    return (
        position.bottom > 0 &&
        position.right > 0 &&
        position.top < (window.innerHeight || document.documentElement.clientHeight) &&
        position.left < (window.innerWidth || document.documentElement.clientWidth)
    );
}