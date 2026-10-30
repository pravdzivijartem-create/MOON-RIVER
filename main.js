const open = document.getElementById("open");
const close1 = document.getElementById("close1");
const modal = document.getElementById("modal");

open.addEventListener("click", () => {
    modal.style.display = "block";
})

close1.addEventListener("click", () => {
    modal.style.display = "none";
})

let name = document.querySelectorAll('.btnor');

name.forEach(function (btnor) {
    btnor.addEventListener('click', function () {

        name.forEach(b => b.classList.remove('active'));

        btnor.classList.add('active');
    });
});