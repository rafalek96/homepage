console.log("Cześć!");

let naglowek = document.querySelector(".naglowek");
let przycisk = document.querySelector(".przycisk");

przycisk.addEventListener("click", () => {
    naglowek.remove();
});