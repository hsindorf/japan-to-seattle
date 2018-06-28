// PAGE LOAD FUNCTIONS

var considerAdding = document.getElementById('consider-adding');
var considerAddingInner = document.getElementById('consider-adding-inner');
activitiesFiltered = Activity.favorites.filter(filterFavorites);
renderTheList(activitiesFiltered, suitcaseContainer);
checkForFavorites();

function filterFavorites(activity) {
  return (activity.favorite === true);
}

function checkForFavorites() {
  if (activitiesFiltered.length === 0) {
    var newList = [];
    newList.push(Activity.all[Math.floor(Activity.all.length * Math.random())]);
    renderTheList(newList, considerAddingInner);
    var suitcaseButton = document.getElementsByClassName('suitcase-button');
    suitcaseButton[0].addEventListener('click', addedToFavorites);
  } else {
    considerAdding.parentElement.removeChild(considerAdding);
  }
}

function addedToFavorites() {
  Activity.favorites[event.target.id].favorite = true;
  storeFavoritesToStorage();
  suitcaseContainer.textContent = '';
  event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(event.target.parentElement.parentElement.parentElement.parentElement.parentElement);
  activitiesFiltered = Activity.favorites.filter(filterFavorites);
  renderTheList(activitiesFiltered, suitcaseContainer);
}