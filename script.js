document.getElementById("icon").addEventListener('click', myFunction);
document.getElementById("menu").addEventListener('click', myfun);
document.getElementById("search").addEventListener('click', searchfun);

side = document.querySelector('.icon');
sideBar = document.querySelector('.side-nav');
dash = document.querySelector('.fluid');
srch = document.querySelector('.search-box');
nav = document.querySelector('.container-fluid');

function myFunction() {
    if (side.className==="icon") {
        side.className+=" active";
        sideBar.className="side-nav anim";
        dash.className+=" bgblur";
        nav.classList.remove('resp-container-fluid');
        srch.classList.remove('resp-search');
        document.getElementById("search").getElementsByTagName('img')[0]['src']="search-13-16.png";
    } else {
        side.className="icon";
        sideBar.className="side-nav revanim";
        dash.classList.remove('bgblur');
    }
  }


function myfun(event) {
    document.querySelectorAll('.homebtn').forEach(function(item) {
        item.classList.remove('menuactive');
      })
    if (event.target.className!="menu") {
        event.target.classList.add("menuactive");
    }
}


function searchfun() {
    if (srch.className==='search-box') {
        document.getElementById("search").getElementsByTagName('img')[0]['src']="x-icon.jpg";
        srch.className+=" resp-search";
        nav.className+=" resp-container-fluid";
        side.className="icon";
        sideBar.className="side-nav revanim"

    } else {
        srch.className="search-box";
        nav.className="container-fluid";
        document.getElementById("search").getElementsByTagName('img')[0]['src']="search-13-16.png";

    }
}
