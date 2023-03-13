document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth <= 375){
        document.getElementById('mainStoryImage').src = "./assets/images/image-web-3-mobile.jpg";
    }

  });

function menuOpen(){
    document.getElementById('MobileNavMenu').style = "display: block";
}

function menuClose(){
    document.getElementById('MobileNavMenu').style = "display: none";
}