// variables that store the two containers for activities
var suitcaseContainer = document.getElementById('suitcase-container');
var activitiesContainer = document.getElementById('activities-container');
// stores active filters
var activeFilters = [false, false, false];
// stories the filtered activities for this session (array of objects - pulled from local storage on page load, otherwise rechosen when a new filter is selected)
var activitiesFiltered = [];

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
function renderAnActivity() {
  
}

// renders the list of activities to the page
function renderTheList(renderWhere) {
  for (var i = 0; i < activitiesFiltered.length; i++) {
    //outer container
    var activityContainer = document.createElement('div');
    activityContainer.setAttribute('class', 'activity-container');
    renderWhere.appendChild(activityContainer);
    // image
    var activityImage = document.createElement('img');
    activityImage.setAttribute('src', activitiesFiltered[i].image);
    activityContainer.appendChild(activityImage);
    // info to right of image
    var activityInfo = document.createElement('div');
    activityInfo.setAttribute('class', 'activity-info');
    activityContainer.appendChild(activityInfo);
    // to append info - name
    var activityName = document.createElement('p');
    activityName.textContent = activitiesFiltered[i].name;
    activityInfo.appendChild(activityName);
    // price
    var activityPrice = document.createElement('p');
    activityPrice.textContent = activitiesFiltered[i].price;
    activityInfo.appendChild(activityPrice);
    // type
    var activityType = document.createElement('p');
    activityType.textContent = activitiesFiltered[i].type;
    activityInfo.appendChild(activityType);
    // location
    var activityArea = document.createElement('p');
    activityArea.textContent = activitiesFiltered[i].area;
    activityInfo.appendChild(activityArea);
    // map
    var activityMapP = document.createElement('p');
    activityInfo.appendChild(activityMapP);
    var activityMapA = document.createElement('a');
    activityMapA.setAttribute('href', activitiesFiltered[i].maps);
    activityMapA.setAttribute('target', '_blank');
    activityMapA.textContent = 'Map';
    activityMapP.appendChild(activityMapA);
    // add/remove my list
  }
}

// LOCAL STORAGE

// store current filters and current activities
function storeFilters() {}

// get from storage
function getFilters() {}

// store to suitcase
function storeFavorites() {}

// get suitcase
function getFavorites() {}