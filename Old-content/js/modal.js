// MODAL CONTACT FORM CODE
// Get DOM Elements
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('#modal-btn')
const closeBtn = document.querySelector('.modal-close')

// Events
modalBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

// Open
function openModal (e) {
  modal.style.display = 'block'

  e.preventDefault()
}

// Close
function closeModal () {
  modal.style.display = 'none'
}

// Close If Outside Click
function outsideClick (e) {
  if (e.target == modal) {
    modal.style.display = 'none'
  }
}
