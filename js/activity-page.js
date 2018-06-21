// VARIABLES

// gets container
var activitiesContainer = document.getElementById('activities-container');
// stores active filters
var activeFilters = [false, false, false];

// PAGE LOAD FUNCTIONALITY

getFiltersFromStorage();
runFilters();
renderTheList(suitcaseContainer);

// FILTER FUNCTIONALITY

// function to run through all filters
function runFilters() {
  // unfilter
  // run current filters
  if (activeFilters[0] === true) {
    //do filter price
    filter(price, filterValue);
  }
  if (activeFilters[1] === true) {
    //do filter type
    filter(type, filterValue);
  }
  if (activeFilters[2] === true) {
    // do filter place
    filter(area, filterValue);
  }
}

// run a single filter
function filter(whichFilter, filterValue) {}

// add filters to page
function addFilterOptions() {

}

// LOCAL STORAGE

// store current filters and current activities
function storeFiltersToStorage() {}

// get from storage
function getFiltersFromStorage() {}

// store to suitcase
function storeFavoriteToStorage() {}