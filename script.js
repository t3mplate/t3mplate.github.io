var menuList = document.getElementById('menu-list');

menuList.style.maxHeight = "0px";

function menutoggle() {
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "200px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}