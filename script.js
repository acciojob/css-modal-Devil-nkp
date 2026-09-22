const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", function () {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (event) {
    const modalContent = document.querySelector(".modal-content");

    if (!modalContent.contains(event.target)) {
        modal.style.display = "none";
    }
});