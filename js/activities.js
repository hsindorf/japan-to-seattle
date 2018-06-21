prices = ['< 50', '50-150', '150-500', '500+'];
types = ['Food', 'Sightseeing', 'Shopping'];
areas = ['Pike Place Market', 'Around UW Campus', 'Around Space Needle', 'Around Safeco Field', 'Outside of the City'];

Activity.all = [];

function Activity(name, price, type, areas) {
  this.name = name;
  this.price = price;
  this.type = type;
  this.areas = areas;
  this.image = '';
  this.maps = '';
  Activity.all.push(this);
}

function makeLocations() {
  var pikePlace = new Activity('Pike Place Market', prices[0], types[1], areas[0], 'img/pikeplace.jpg', 'https://goo.gl/maps/bvptei6TXYx');
  var universityCampus = new Activity('UW Campus', prices[0], types[1], areas[1]);
}

makeLocations();