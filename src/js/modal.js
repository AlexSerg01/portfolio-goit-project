
const MODAL = document.querySelector(".ModalMenu")
const OPEN_BTN = document.querySelector("#openModal")
const CLOSE_BTN = document.querySelector(".CloseModalBtn")
const BODY = document.querySelector("body")
const MOB_MENU_LINKS = document.querySelector(".Menu")

const SECTIONS = {
  aboutMe: document.querySelector("#about-me"),
  benefits: document.querySelector("#Benefits"),
  projects: document.querySelector(".SectionProject"),
  faq: document.querySelector("#FAQ"),
  order: document.querySelector("#WorkTogether")
}

// =============================================================

OPEN_BTN.addEventListener("click", doOpenMenu)
CLOSE_BTN.addEventListener("click", doCloseModal)
MOB_MENU_LINKS.addEventListener("click", doLinkDIrect)

// =============================================================

function doOpenMenu() {
  MODAL.classList.add("Open")
  BODY.classList.add("ModalBodyLock")
}

function doCloseModal() {
  MODAL.classList.remove("Open")
  BODY.classList.remove("ModalBodyLock")
}

function doLinkDIrect(event) {
  if (event.target === event.currentTarget || event.target === CLOSE_BTN) {
  return
  }
  if (event.target.classList.contains("AboutMe")) {
    doCloseModal()
    SECTIONS.aboutMe.scrollIntoView({behavior: "smooth"})
  } else if (event.target.classList.contains("Benefits")) {
    doCloseModal()
    SECTIONS.benefits.scrollIntoView({behavior: "smooth"})
  } else if (event.target.classList.contains("Projects")) {
    doCloseModal()
    SECTIONS.projects.scrollIntoView({behavior: "smooth"})
  } else if (event.target.classList.contains("FAQ")) {
    doCloseModal()
    SECTIONS.faq.scrollIntoView({behavior: "smooth"})
  } else if (event.target.classList.contains("OrderButton")) {
    doCloseModal()
    SECTIONS.order.scrollIntoView({behavior: "smooth"})
  }
}