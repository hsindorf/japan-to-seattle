// VARIABLES

// gets container
var activitiesContainer = document.getElementById('activities-container');
// stores active filters
var activeFilters = [null, null, null];
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
  activitiesFiltered = Activity.all;
  // run current filters
  if (activeFilters[0] !== null && activeFilters[0] !== undefined) {
    activitiesFiltered = activitiesFiltered.filter(filterPrice);
  }
  if (activeFilters[1] !== null && activeFilters[1] !== undefined) {
    activitiesFiltered = activitiesFiltered.filter(filterType);
  }
  if (activeFilters[2] !== null && activeFilters[2] !== undefined) {
    activitiesFiltered = activitiesFiltered.filter(filterArea);
  }
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

//adds filters to temporary memory
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
  nullOption.setAttribute('value', '');
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
  localStorage.setItem('filters', JSON.stringify(activeFilters));
}

// get from storage
function getFiltersFromStorage() {
  if (localStorage.getItem('filters')) {
    activeFilters = JSON.parse(localStorage.getItem('filters'));
  }
}

// store to suitcase
function storeFavoriteToStorage() {}


// SET EVENT LISTENERS

var filterButton = document.getElementById('run-filters');
filterButton.addEventListener('click', filterEventHandler);

function filterEventHandler(event) {
  event.preventDefault();
  setFilters();
  storeFiltersToStorage();
  runFilters();
}

var clearFilterButton = document.getElementById('clear-filters');
clearFilterButton.addEventListener('click', removeFilters);

function removeFilters(event) {
  event.preventDefault();
  activeFilters = [null, null, null];
  runFilters();
}