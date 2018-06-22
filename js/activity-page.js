// VARIABLES

// gets container
var activitiesContainer = document.getElementById('activities-container');
// stores active filters
var activeFilters = [false, false, false];
// gets filter form
var filterForm = document.getElementById('select-filters');

// PAGE LOAD FUNCTIONALITY

// TEMPORARY TO TEST RENDERING
activitiesFiltered = Activity.all;
// REMOVE LATER

// adds filter dropdowns to page - dynamic to add more categories later
addFilterOptions('select-price', prices);
addFilterOptions('select-type', types);
addFilterOptions('select-area', areas);

getFiltersFromStorage();
// runFilters();
renderTheList(activitiesContainer);

// FILTER FUNCTIONALITY

// function to run through all filters
function runFilters() {
  activitiesFiltered = Activities.all;
  // run current filters
  activitiesFiltered = activitiesFiltered.filter(filterPrice);
  localStorage.setItem('filterPrice', (document.getElementById('select-price')).value);
  activitiesFiltered = activitiesFiltered.filter(filterType);
  localStorage.setItem('filterType', (document.getElementById('select-type')).value);
  activitiesFiltered = activitiesFiltered.filter(filterArea);
  localStorage.setItem('filterArea', (document.getElementById('select-area')).value);
}

// run filter - price
function filterPrice(activityOfList) {
  return activityOfList.price === prices[(document.getElementById('select-price')).value];
}
// filter - type
function filterType(activityOfList) {
  return activityOfList.type === types[(document.getElementById('select-type')).value];
}
// filter - Area
function filterArea(activityOfList) {
  return activityOfList.area === areas[(document.getElementById('select-area')).value];
}

// add filter options to page
function addFilterOptions(whichSelect, whichArray) {
  var select = document.getElementById(whichSelect);
  for (var i = 0; i < whichArray.length; i++) {
    var option = document.createElement('option');
    option.setAttribute('value', i);
    option.textContent = whichArray[i];
    select.appendChild(option);
  }
}

function removeFilters() {

}

// LOCAL STORAGE

// store current filters and current activities

// get from storage
function getFiltersFromStorage() {
  activeFilters[0] = localStorage.getItem('filterPrice');
  activeFilters[1] = localStorage.getItem('filterType');
  activeFilters[2] = localStorage.getItem('filterArea');
}

// store to suitcase
function storeFavoriteToStorage() {}