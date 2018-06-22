// VARIABLES

// gets container
var activitiesContainer = document.getElementById('activities-container');
// stores active filters
var activeFilters = [];
// gets filter form
var filterForm = document.getElementById('select-filters');

// PAGE LOAD FUNCTIONALITY

// adds filter dropdowns to page - dynamic to add more categories later
addFilterOptions('select-price', prices);
addFilterOptions('select-type', types);
addFilterOptions('select-area', areas);

getFiltersFromStorage();
runFilters();

// FILTER FUNCTIONALITY

// function to run through all filters
function runFilters() {
  storeFiltersToStorage();
  activitiesFiltered = Activity.all;
  // run current filters
  activitiesFiltered = activitiesFiltered.filter(filterPrice);
  activitiesFiltered = activitiesFiltered.filter(filterType);
  activitiesFiltered = activitiesFiltered.filter(filterArea);
  if (activitiesFiltered.length === 0) {
    activitiesContainer.textContent = '';
    var pEl = document.createElement('p');
    pEl.textContent = 'Nothing found!';
    activitiesContainer.appendChild(pEl);
  } else {
    activitiesContainer.textContent = '';
    renderTheList(activitiesContainer);
  }
}

function setFilters() {
  activeFilters[0] = prices[(document.getElementById('select-price')).value];
  activeFilters[1] = types[(document.getElementById('select-type')).value];
  activeFilters[2] = areas[(document.getElementById('select-area')).value];
}

// run filter - price
function filterPrice(activityOfList) {
  return activityOfList.price === activeFilters[0];
}
// filter - type
function filterType(activityOfList) {
  return activityOfList.type === activeFilters[1];
}
// filter - Area
function filterArea(activityOfList) {
  return activityOfList.areas === activeFilters[2];
}

// add filter options to page
function addFilterOptions(whichSelect, whichArray) {
  var select = document.getElementById(whichSelect);
  var nullOption = document.createElement('option');
  nullOption.setAttribute('value', null);
  nullOption.textContent = 'No Filter';
  select.appendChild(nullOption);
  for (var i = 0; i < whichArray.length; i++) {
    var option = document.createElement('option');
    option.setAttribute('value', i);
    option.textContent = whichArray[i];
    select.appendChild(option);
  }
}

// LOCAL STORAGE

// store current filters and current activities
function storeFiltersToStorage() {
  localStorage.setItem('filterPrice', activeFilters[0]);
  localStorage.setItem('filterType', activeFilters[1]);
  localStorage.setItem('filterArea', activeFilters[2]);
}

// get from storage
function getFiltersFromStorage() {
  activeFilters[0] = localStorage.getItem('filterPrice');
  activeFilters[1] = localStorage.getItem('filterType');
  activeFilters[2] = localStorage.getItem('filterArea');
}

// store to suitcase
function storeFavoriteToStorage() {}


// SET EVENT HANDLERS

var filterButton = document.getElementById('run-filters');
filterButton.addEventListener('click', filterEventHandler);

function filterEventHandler(event) {
  event.preventDefault();
  setFilters();
  runFilters();
}

var clearFilterButton = document.getElementById('clear-filters');
clearFilterButton.addEventListener('click', removeFilters);

function removeFilters(event) {
  event.preventDefault();
  activeFilters = [];
  storeFiltersToStorage();
  activitiesContainer.textContent = '';
  activitiesFiltered = Activity.all;
  renderTheList(activitiesContainer);
}