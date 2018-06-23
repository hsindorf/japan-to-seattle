// VARIABLES

var suitcaseContainer = document.getElementById('suitcase-container');

// PAGE LOAD FUNCTIONS

activitiesFiltered = Activity.favorites.filter(filterFavorites);
renderTheList(suitcaseContainer);

// LOCAL STORAGE

// store to suitcase
function storeFavoriteToStorage() {}

// get suitcase
function getFavoritesFromStorage() {}

function filterFavorites(activity) {
  return (activity.favorite === true);
}