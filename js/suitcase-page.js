// PAGE LOAD FUNCTIONS

activitiesFiltered = Activity.favorites.filter(filterFavorites);
renderTheList(suitcaseContainer);

function filterFavorites(activity) {
  return (activity.favorite === true);
}