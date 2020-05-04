let d = window.matchMedia('(max-width: 767px)')
if (d.matches) {
  let development_slider = tns({
    container: '.sub-project-slider',
    slideBy: 'page',
    speed: 400,
    mouseDrag: true,
    autoplayButtonOutput: false,
    nav: false,
    items: 1.2,
    gutter: 20,
    controls: false
  })
}
