// ** PROJECT SLIDER CODE **

const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')

const gallery1 = document.querySelector('#project-gallery-1')
const gallery2 = document.querySelector('#project-gallery-2')

// Select tab
function selectItem () {
  if (gallery1.classList.contains('show')) {
    removeShow()
    gallery2.classList.add('show')
    // Add fade in class
    gallery2.classList.add('fade-in')

    // Remove fade in class
    setTimeout(() => gallery2.classList.remove('fade-in'), 500)
  } else {
    removeShow()
    gallery1.classList.add('show')
    // Add fade in class
    gallery1.classList.add('fade-in')

    // Remove fade in class
    setTimeout(() => gallery1.classList.remove('fade-in'), 500)
  }
}

// Remove show class
function removeShow () {
  gallery1.classList.remove('show')
  gallery2.classList.remove('show')
}

// Listen for click
function listenToThis () {
  leftArrow.addEventListener('click', selectItem)
  rightArrow.addEventListener('click', selectItem)
}

listenToThis()

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

// ** NEWS SLIDER CODE **

// const newsLeftArrow = document.querySelector('.ne-arrow-left')
// const newsRightArrow = document.querySelector('.ne-arrow-right')

// const newsGallery = document.querySelectorAll('.ne-image')
// // const auto = false
// // const intervalTime = 5000
// // let slideInterval

// // Select tab
// function nextItem () {
//   const current = document.querySelector('.current')
//   // Remove show class
//   current.classList.remove('current')
//   // Check for next slide
//   if (current.nextElementSibling.classList.contains('ne-image')) {
//     // Add show to next sibling
//     current.nextElementSibling.classList.add('current')
//   } else {
//     newsGallery[0].classList.add('current')
//   }
//   setTimeout(() => current.classList.remove('current'))
// }

// function prevItem () {
//   const current = document.querySelector('.current')
//   // Remove show class
//   current.classList.remove('current')
//   // Check for prev slide
//   if (current.previousElementSibling) {
//     // Add show to prev sibling
//     current.previousElementSibling.classList.add('current')
//   } else {
//     newsGallery[newsGallery.length - 1].classList.add('current')
//   }
//   setTimeout(() => current.classList.remove('current'))
// }

// // Listen for click
// function arrowListener () {
//   newsLeftArrow.addEventListener('click', prevItem)
//   newsRightArrow.addEventListener('click', nextItem)
// }

// arrowListener()
