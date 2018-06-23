// gets container
var activitiesContainer = document.getElementById('activities-container');
var suitcaseContainer = document.getElementById('suitcase-container');

// stories the filtered activities for this session (array of objects - pulled from local storage on page load, otherwise rechosen when a new filter is selected)
var activitiesFiltered = [];

// page load functions
getFavoritesFromStorage();

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
    activityPrice.textContent = 'Price (USD): ' + activitiesFiltered[i].price;
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
    activityMapA.setAttribute('class', 'button map-button');
    activityMapA.setAttribute('target', '_blank');
    var activityMapI = document.createElement('i');
    activityMapI.className += 'fas fa-map-marked-alt';
    activityMapA.textContent += ' Map';
    activityMapA.prepend(activityMapI);
    activityMapP.appendChild(activityMapA);
    // website
    var activityWebsiteA = document.createElement('a');
    activityWebsiteA.setAttribute('href', activitiesFiltered[i].website);
    activityWebsiteA.setAttribute('class', 'button website-button');
    activityWebsiteA.setAttribute('target', '_blank');
    var activityWebsiteI = document.createElement('i');
    activityWebsiteI.className += 'fas fa-globe';
    activityWebsiteA.textContent += ' Website';
    activityWebsiteA.prepend(activityWebsiteI);
    activityMapP.appendChild(activityWebsiteA);
    // add/remove my list
    var activityFavoriteP = document.createElement('p');
    activityInfo.appendChild(activityFavoriteP);
    var activityFavoriteB = document.createElement('button');
    activityFavoriteB.setAttribute('id', activitiesFiltered[i].id);
    activityFavoriteB.setAttribute('class', 'button suitcase-button');
    if (Activity.favorites[activitiesFiltered[i].id].favorite) {
      activityFavoriteB.textContent = ' Remove from Suitcase';
      activityFavoriteB.addEventListener('click', removeFavorite);
    } else {
      activityFavoriteB.textContent = ' Add to Suitcase';
      activityFavoriteB.addEventListener('click', addFavorite);
    }
    var activityFavoriteI = document.createElement('i');
    activityFavoriteI.className += 'fas fa-suitcase';
    activityFavoriteB.prepend(activityFavoriteI);
    activityFavoriteP.appendChild(activityFavoriteB);
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

// FAVORITES

function addFavorite(event) {
  event.preventDefault();
  Activity.favorites[event.target.id].favorite = true;
  event.target.textContent = ' Remove from Favorites';
  var activityFavoriteI = document.createElement('i');
  activityFavoriteI.className += 'fas fa-suitcase';
  event.target.prepend(activityFavoriteI);
  event.target.removeEventListener('click', addFavorite);
  event.target.addEventListener('click', removeFavorite);
  storeFavoritesToStorage();
}

function removeFavorite(event) {
  event.preventDefault();
  Activity.favorites[event.target.id].favorite = false;
  storeFavoritesToStorage();
  if (suitcaseContainer) {
    animateRemoval();
    event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode);
  }
  else {
    event.target.textContent = ' Add to favorites';
    var activityFavoriteI = document.createElement('i');
    activityFavoriteI.className += 'fas fa-suitcase';
    event.target.prepend(activityFavoriteI);
    event.target.removeEventListener('click', removeFavorite);
    event.target.addEventListener('click', addFavorite);
  }
}


// animations

function animateRemoval() {};

// function animateAdd() {};

// LOCAL STORAGE

// store Activity.all
function storeFavoritesToStorage() {
  localStorage.setItem('activityFavorites', JSON.stringify(Activity.favorites));
}

// Activity.all
function getFavoritesFromStorage() {
  if (localStorage.getItem('activityFavorites')) {
    Activity.favorites = JSON.parse(localStorage.getItem('activityFavorites'));
    if (Activity.favorites.length !== Activity.all.length) {
      for (var i = Activity.favorites.length; i < Activity.all.length; i++) {
        Activity.favorites.push(Activity.all[i]);
      }
    }
  } else {
    Activity.favorites = Activity.all;
  }
}