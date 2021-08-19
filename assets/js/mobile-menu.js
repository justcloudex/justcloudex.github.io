document.querySelector('.sandwich').onclick = function() {
    document.querySelector('.mobile-menu').style.right = "0";
    document.querySelector('.sandwich').style.display = "none";
}

document.querySelector('.sandwich-white').onclick = function() {
    document.querySelector('.mobile-menu').style.right = "-160%";
    document.querySelector('.sandwich').style.display = "flex";
}