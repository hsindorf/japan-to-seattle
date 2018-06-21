// variables that store the two containers for activities
var suitcaseContainer = document.getElementById('suitcase-container');
var activitiesContainer = document.getElementById('activities-container');
// stores active filters
var activeFilters = [false, false, false];

// function to run through all filters
function runFilters() {
  // unfilter
  if (activeFilters[0] === true) {
    //do filter price
  }
  if (activeFilters[1] === true) {
    //do filter type
  }
  if (activeFilters[2] === true) {
    // do filter place
  }
}

// run a single filter
function filter(whichFilter) {}

// PAGE RENDERING

// renders a single activity
function renderAnActivity() {}

// renders the list of activities to the page
function renderTheList() {}

// LOCAL STORAGE

// store current filters and current activities
function storeFilters() {}

// get from storage
function getFilters() {}

// store to suitcase
function storeFavorites() {}

// get suitcase
function getFavorites() {}