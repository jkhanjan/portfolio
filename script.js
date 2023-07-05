

document.addEventListener('DOMContentLoaded', function(){
    var cont = document.getElementById('container');
    var backgroundimg1 =  "url('./img/bg.jpg')" ;  
    var backgroundimg2 =  "url('./img/bg2.jpg')";
    var backgroundimg3 =  "url('./img/bg3.jpg')";
    var currentBackground = backgroundimg1;

    function sliderImage() {
        if(currentBackground === backgroundimg2) {
            cont.style.backgroundImage = backgroundimg1;
            currentBackground = backgroundimg1;
        }else if(currentBackground === backgroundimg1) {
            cont.style.backgroundImage = backgroundimg3;
            currentBackground = backgroundimg3;
        }
        else{
            cont.style.backgroundImage = backgroundimg2;
            currentBackground = backgroundimg2;
        }
    }
    setInterval(sliderImage, 2000);
});

document.getElementById('menu-btn').addEventListener('click', mobileMenu);
function mobileMenu() {
    document.getElementById('mainmenu').style.display = 'block';
    document.getElementById('menu-btn2').style.display = 'block';
    document.getElementById('menu-btn').style.display = 'none';
}

document.getElementById('menu-btn2').addEventListener('click', crossMenu);
function crossMenu() {
    document.getElementById('menu-btn2').style.display = 'none';
    document.getElementById('mainmenu').style.display = 'none';
    document.getElementById('menu-btn').style.display = 'block';
}
