// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("Header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// $("#Header .wrapper .navbar .nav-item .nav-link").click((e) => {
//   e.preventDefault();
//   $(".nav-link").removeClass("active");
//   $(e.currentTarget).addClass("active");
// });
