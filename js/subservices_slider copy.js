var c = window.matchMedia('(max-width: 767px)')
if (c.matches) {
  var development_slider = tns({
    container: '.development-slider',
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
