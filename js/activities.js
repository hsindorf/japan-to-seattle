var prices = ['< 50', '50 - 150', '150 - 500', '500+'];
var types = ['Food', 'Sightseeing', 'Shopping'];
var areas = ['Pike Place Market', 'Around UW Campus', 'Around Space Needle', 'Around Safeco Field', 'Outside of the City'];

Activity.all = [];

function Activity(name, price, type, areas, image, maps, desc, website) {
  this.name = name;
  this.price = price;
  this.type = type;
  this.areas = areas;
  this.image = image;
  this.maps = maps;
  this.desc = desc;
  this.website = website;
  Activity.all.push(this);
}

function makeLocations() {
  new Activity('Pike Place Market', 
  prices[0], 
  types[1], 
  areas[0], 
  'img/pikeplace.jpg', 
  'https://goo.gl/maps/bvptei6TXYx');
  
  new Activity('UW Campus', 
  prices[0], 
  types[1], 
  areas[1], 
  'img/uwCampus.jpg', 
  'https://goo.gl/maps/9Fwvkcm9kkF2', 
  'The UW is one of the world’s preeminent public universities. Ranked No. 13 in the world on the 2017 Academic Ranking of World Universities, the UW educates more than 54,000 students annually.','https://www.washington.edu/');

  new Activity('Karaage Setsuna', 
  prices[0], 
  types[0], 
  areas[2], 
  'img/karaageSetsuna.jpeg', 
  'https://goo.gl/maps/TE3vLmsS6f82');

  new Activity('Suika Seattle', 
  prices[1], 
  types[0], 
  areas[2], 
  'img/suikaSeattle.jpg', 
  'https://goo.gl/maps/JuBDe3e4Bjk', 
  'http://suikaseattle.com');

  new Activity('Ballard Locks', 
  prices[0], 
  types[1], 
  areas[5], 
  'img/ballardLocks.jpg', 
  'https://goo.gl/maps/CrWCb4Ybh542', 
  'Located along a waterway, in a park-like setting, near great seafood, a Ballard Locks visit is quintessentially Seattle. Children particularly enjoy watching the Lake Washington Ship Canal locks in operation as they assist boats passing between Lake Union and the Puget Sound.',
  'http://ballardlocks.org/',);

  new Activity('Woodland Park Zoo', 
  prices[1], 
  types[1], 
  areas[1], 
  'img/woodlandParkZoo.jpg', 
  'https://goo.gl/maps/FhUmE3G7snM2', 
  'Visit naturalistic habitats that take you from Alaska\'s tundra (Northern Trail) to Australia & New Zealand to South America & Africa.',
  'http://zoo.org');

  new Activity('Katsu Burger', 
  prices[0], 
  types[0], 
  areas[3], 
  'img/katsuBurger.jpg', 
  'https://goo.gl/maps/nVSwoE9cQFx', 
  'An over-the-top, five-napkin affair, Katsu Burger has a cult following for its quirky Japanese take on an American classic. The burgers are supersized, Instagram-friendly, exotic flavor bombs with names like “Godzilla Attack Spicy!"',
  'https://www.katsuburger.com/');
}
makeLocations();