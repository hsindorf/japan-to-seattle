var prices = ['< 50', '50-150', '150-500', '500+'];
var types = ['Food', 'Sightseeing', 'Shopping'];
var areas = ['Pike Place Market', 'Around UW Campus', 'Around Space Needle', 'Around Safeco Field', 'Outside of the City'];

Activity.all = [];

function Activity(name, price, type, areas, image, maps) {
  this.name = name;
  this.price = price;
  this.type = type;
  this.areas = areas;
  this.image = image;
  this.maps = maps;
  Activity.all.push(this);
}

function makeLocations() {
  new Activity('test Location', prices[0], types[0], areas[0], 'https://placehold.it/480x300', 'https://goo.gl/maps/bvptei6TXYx'); 
  new Activity('Pike Place Market', prices[0], types[1], areas[0], 'img/pikeplace.jpg', 'https://goo.gl/maps/bvptei6TXYx');
  new Activity('UW Campus', prices[0], types[1], areas[1]);
  new Activity('Karage Setsuna', prices[0], types[0], areas[2], 'img/karageSetsuna.jpg', 'https://goo.gl/maps/TE3vLmsS6f82');
}

makeLocations();