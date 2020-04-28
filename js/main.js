// ** ATELIER TEMP COLOR CODE **
const atImages = document.querySelectorAll('#at-image')
const atTemp = document.querySelector('.temp-color')

function noTemp () {
  atTemp.classList.remove('temp-color')
}

function listenToHover () {
  atImages.forEach(img => img.addEventListener('mouseover', noTemp))
}

listenToHover()

var a = window.matchMedia('(max-width: 767px)')
if (a.matches) {
  var home_slider_one = tns({
    container: '.services-slider',
    slideBy: 'page',
    speed: 400,
    mouseDrag: true,
    autoplayButtonOutput: false,
    nav: false,
    items: 1.2,
    gutter: 10,
    controls: false
  })
}

var b = window.matchMedia('(min-width: 768px)')
if (b.matches) {
  var home_slider_two = tns({
    container: '#badass-slider',
    slideBy: 'page',
    items: 1,
    speed: 400,
    mouseDrag: true,
    controlsContainer: '#home-slider-control-1',
    autoplayButtonOutput: false,
    mode: 'gallery'
  })
} else {
  var home_slider_four = tns({
    container: '#badass-slider',
    slideBy: 'page',
    items: 1,
    speed: 400,
    // mouseDrag: true,
    controlsContainer: '#home-slider-control-1',
    autoplayButtonOutput: false,
    // controls: false,
    mode: 'gallery'
  })
}

var home_slider_three = tns({
  container: '.my-slider',
  slideBy: 'page',
  items: 1,
  speed: 400,
  mouseDrag: true,
  controlsContainer: '#home-slider-control-2',
  autoplayButtonOutput: false,
  nav: false
})
