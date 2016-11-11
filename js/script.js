var popupOpen = document.querySelector(".company__btn--modal");
var popup = document.querySelector(".modal-contents");
var popupClose = document.querySelector(".modal-contents__close");
var inputName = document.querySelector("[type='text']");
var popupMap = document.querySelector(".modal-map");
var mapOpen = document.querySelector(".company__map");
var mapClose = document.querySelector(".modal-map__close");
var overlay = document.querySelector(".modal-overlay");

function openModal(click, popupVar) {
    click.addEventListener("click", function(event) {
        event.preventDefault();
        popupVar.classList.add("modal-contents--show");
        overlay.classList.add("modal-overlay--show");
        popup.scrollIntoView(top);
    })
};

function closeModal(click, popupVar) {
    click.addEventListener("click", function(event) {
        event.preventDefault();
        popupVar.classList.remove("modal-contents--show");
        overlay.classList.remove("modal-overlay--show");
    })
};

openModal(popupOpen, popup);
openModal(mapOpen, popupMap);
closeModal(popupClose, popup);
closeModal(overlay, popup);
closeModal(mapClose, popupMap);