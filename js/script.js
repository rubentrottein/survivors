let sections = document.getElementsByTagName('section');
let nav = document.getElementsByTagName("nav")[0];
function capFirst(element){
    element.split("_").map(function(e){ console.log(element + " splitted");})
    return (element+'').charAt(0).toUpperCase()+element.substr(1);
}
for (let i=0; i<sections.length;i++){
    nav.innerHTML+= `<li><a href="#`+sections[i].id+`">`+capFirst(sections[i].id)+`</a></li>`;
}

//Sticky Nav

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}