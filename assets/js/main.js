$(".autoplay").each(function() {
  $(this).slick($(this).data());
});

function header() {
    var header = document.querySelector(".header__bottom");
    window.addEventListener("scroll", function () {
        var y = window.scrollY;
        if (y > 200) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
}

header()


function nav() {
  var check = "theFirst";
  let navbar = document.querySelector(".nav-bar");
  let menu = document.querySelector(".menu")
  console.log(navbar)
  navbar.addEventListener("click", function(){
    if (check == "theFirst"){
        check = "theSecond";
        navbar.classList.add( "active");
        menu.classList.add("active")
    } else if (check == "theSecond") {
        check = "theFirst";
        navbar.classList.remove( "active");
        menu.classList.remove("active")
    }
  })
}

nav()


