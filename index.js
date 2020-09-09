
/*var nav = document.querySelector('.nav-bar')
var home = document.querySelector('.home')

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

let callback = (entries,observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      nav.classList.add('nav-change')
    }
  })
}
*/
let observer = new IntersectionObserver(callback,options);

function onScroll() {
  var box = document.querySelectorAll('.box');
  var screenPosition = window.innerHeight /1.3 ;
  console.log('hello');
  for(var i=0; i < box.length; i++) {
    var boxPosition = box[i].getBoundingClientRect().top;
    if(boxPosition < screenPosition) {
      box[i].classList.add('box-appear');
    }
  }
}

window.addEventListener('scroll',onScroll);
