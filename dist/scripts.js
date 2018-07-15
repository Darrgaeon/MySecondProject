$(".slider").owlCarousel({
    loop: true,
    items: 1
});



function openNav() {
    document.getElementById("mobileMenu").style.width = "200px";
    // document.getElementById("container-main").style.marginLeft = "150px";
    document.body.style.backgroundColor = "rgba(38,38,38,0.4)";

    const navBtn = document.getElementById("navBtn");
    navBtn.setAttribute('onclick','closeNav()');
    navBtn.innerHTML = '&#9776; close';
}

///кнопка закрытия
function closeNav() {
    document.getElementById("mobileMenu").style.width = "0";
    // document.getElementById("container-main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";

    const navBtn = document.getElementById("navBtn");
    navBtn.setAttribute('onclick', 'openNav()');
    navBtn.innerHTML = '&#9776; open';
}
