// variables that store the two containers for activities
var suitcaseContainer = document.getElementById('suitcase-container');
// stories the filtered activities for this session (array of objects - pulled from local storage on page load, otherwise rechosen when a new filter is selected)
var activitiesFiltered = [];

// PAGE RENDERING

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
    // name
    var activityName = document.createElement('h3');
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
    // desc
    var activityDesc = document.createElement('p');
    activityDesc.textContent = activitiesFiltered[i].desc;
    activityInfo.appendChild(activityDesc);
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

// remove activities from the page
function removeActivitiesFromPage() {
  if (suitcaseContainer) {
    suitcaseContainer.textContent = '';
  } else {
    activitiesContainer.textContent = '';
  }
}

// LOCAL STORAGE

// store to suitcase
function storeFavoriteToStorage() {}

// get suitcase
function getFavoritesFromStorage() {}