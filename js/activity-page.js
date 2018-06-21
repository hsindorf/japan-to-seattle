// VARIABLES

// gets container
var activitiesContainer = document.getElementById('activities-container');
// stores active filters
var activeFilters = [false, false, false];

// PAGE LOAD FUNCTIONALITY

//TEMPORARY TO TEST RENDERING
activitiesFiltered = Activity.all;

addFilterOptions('select-price', prices);
addFilterOptions('select-type', types);
addFilterOptions('select-area', areas);

getFiltersFromStorage();
runFilters();
renderTheList(activitiesContainer);

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

// add filter options to page
function addFilterOptions(whichSelect, whichArray) {
  var select = document.getElementById(whichSelect);
  for (var i = 0; i < whichArray.length; i++) {
    var option = document.createElement('option');
    option.setAttribute('value', i - 1);
    option.textContent = whichArray[i];
    select.appendChild(option);
  }
}

// LOCAL STORAGE

// store current filters and current activities
function storeFiltersToStorage() {}

// get from storage
function getFiltersFromStorage() {}

// store to suitcase
function storeFavoriteToStorage() {}