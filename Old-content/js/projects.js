const allLinks = document.querySelectorAll('.projects-content')
const residentialLinks = document.querySelectorAll('.residential')
const commercialLinks = document.querySelectorAll('.commercial')

const buttonAll = document.getElementById('button-all')
const buttonResidential = document.getElementById('button-residential')
const buttonCommercial = document.getElementById('button-commercial')

const arrows = document.querySelectorAll('.projects-arrow')

const dropDown = document.querySelector('#project-selector')

buttonAll.addEventListener('click', sortAll)
buttonResidential.addEventListener('click', sortResidential)
buttonCommercial.addEventListener('click', sortCommercial)

function sortResidential () {
  allLinks.forEach(link => link.classList.remove('filtered-out'))
  commercialLinks.forEach(link => link.classList.add('filtered-out'))
  buttonAll.classList.remove('projects-selected')
  buttonCommercial.classList.remove('projects-selected')
  buttonResidential.classList.remove('projects-selected')
  buttonResidential.classList.add('projects-selected')
  arrows.forEach(arrow => arrow.classList.remove('shown-arrow'))
  arrows.forEach(arrow => arrow.classList.add('hidden-arrow'))
  buttonResidential.nextElementSibling.classList.remove('hidden-arrow')
  buttonResidential.nextElementSibling.classList.add('shown-arrow')
}

function sortCommercial () {
  allLinks.forEach(link => link.classList.remove('filtered-out'))
  residentialLinks.forEach(link => link.classList.add('filtered-out'))
  buttonAll.classList.remove('projects-selected')
  buttonCommercial.classList.remove('projects-selected')
  buttonResidential.classList.remove('projects-selected')
  buttonCommercial.classList.add('projects-selected')
  arrows.forEach(arrow => arrow.classList.remove('shown-arrow'))
  arrows.forEach(arrow => arrow.classList.add('hidden-arrow'))
  buttonCommercial.nextElementSibling.classList.remove('hidden-arrow')
  buttonCommercial.nextElementSibling.classList.add('shown-arrow')
}

function sortAll () {
  allLinks.forEach(link => link.classList.remove('filtered-out'))
  buttonAll.classList.remove('projects-selected')
  buttonCommercial.classList.remove('projects-selected')
  buttonResidential.classList.remove('projects-selected')
  buttonAll.classList.add('projects-selected')
  arrows.forEach(arrow => arrow.classList.remove('shown-arrow'))
  arrows.forEach(arrow => arrow.classList.add('hidden-arrow'))
  buttonAll.nextElementSibling.classList.remove('hidden-arrow')
  buttonAll.nextElementSibling.classList.add('shown-arrow')
}

dropDown.addEventListener('change', xyv)

function xyv () {
  if (dropDown.value === 'all') {
    sortAll()
  } else if (dropDown.value === 'residential') {
    sortResidential()
  } else if (dropDown.value === 'commercial') {
    sortCommercial()
  }
}
