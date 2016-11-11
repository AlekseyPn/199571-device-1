var popupOpen = document.querySelector(".company__btn--modal");
var popup = document.querySelector(".modal-contents");
var popupClose = document.querySelector(".modal-contents__close");
var inputName = document.querySelector("[type='text']");
var popupMap = document.querySelector(".modal-map");
var mapOpen = document.querySelector(".company__map");
var mapClose = document.querySelector(".modal-map__close");
var overlay = document.querySelector(".modal-overlay");

function openModal(click, popupVar, overlayVar) {
    click.addEventListener("click", function(event) {
        event.preventDefault();
        popupVar.classList.add("modal-contents--show");
        overlayVar.classList.add("modal-overlay--show");
        popup.scrollIntoView(top);
    })
};

function closeModal(click, popupVar, overlayVar) {
    click.addEventListener("click", function(event) {
        event.preventDefault();
        popupVar.classList.remove("modal-contents--show");
        overlayVar.classList.remove("modal-overlay--show");
    })
};

openModal(popupOpen, popup, overlay);
openModal(mapOpen, popupMap, overlay);
closeModal(popupClose, popup, overlay);
closeModal(overlay, popup, overlay);
closeModal(mapClose, popupMap, overlay);