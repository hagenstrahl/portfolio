function toogleNavigation(menuIcon) {
    menuIcon.classList.toggle("change");
    var topNav = document.getElementById("nav-bar");
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "topnav";
    }
}