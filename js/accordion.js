var accordionTitles = document.getElementsByClassName('accordion-title');

// add event listeners to acc titles
for (var i = 0; i < accordionTitles.length; i++) {
  accordionTitles[i].addEventListener('click', changeStatus);
}

function changeStatus(event) {
  event.preventDefault();
  event.target.parentElement.classList.toggle('active-accordion');
}