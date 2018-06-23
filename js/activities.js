var prices = ['< $50', '$50 - $150', '$150 - $500', '$500+'];
var types = ['Food', 'Sightseeing', 'Shopping'];
var areas = ['Pike Place Market', 'Around UW Campus', 'Around Space Needle', 'Around Safeco Field', 'Outside of the City'];

Activity.all = [];
Activity.favorites = [];

function Activity(id, name, price, type, areas, image, maps, desc, website) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.type = type;
  this.areas = areas;
  this.image = image;
  this.maps = maps;
  this.desc = desc;
  this.website = website;
  this.favorite = false;
  Activity.all.push(this);
}

//function to make locations. only add new activities to end!!
function makeLocations() {
  new Activity(0,
    'Pike Place Market',
    prices[0],
    types[1],
    areas[0],
    'img/pikeplace.jpg',
    'https://goo.gl/maps/bvptei6TXYx',
    'description',
    'website');
  new Activity(1,
    'UW Campus',
    prices[0],
    types[1],
    areas[1],
    'img/uwCampus.jpg',
    'https://goo.gl/maps/9Fwvkcm9kkF2',
    'The UW is one of the world’s preeminent public universities. Ranked No. 13 in the world on the 2017 Academic Ranking of World Universities, the UW educates more than 54,000 students annually.','https://www.washington.edu/',
    'website');
  new Activity(2,
    'Karaage Setsuna',
    prices[0],
    types[0],
    areas[2],
    'img/karaageSetsuna.jpg',
    'https://goo.gl/maps/TE3vLmsS6f82',
    'description',
    'website');
  new Activity(3,
    'Suika Seattle',
    prices[1],
    types[0],
    areas[2],
    'img/suikaSeattle.jpg',
    'https://goo.gl/maps/JuBDe3e4Bjk',
    'description',
    'http://suikaseattle.com');
  new Activity(4,
    'Ballard Locks',
    prices[0],
    types[1],
    areas[5],
    'img/ballardLocks.jpg',
    'https://goo.gl/maps/CrWCb4Ybh542',
    'Located along a waterway, in a park-like setting, near great seafood, a Ballard Locks visit is quintessentially Seattle. Children particularly enjoy watching the Lake Washington Ship Canal locks in operation as they assist boats passing between Lake Union and the Puget Sound.',
    'http://ballardlocks.org/');
  new Activity(5,
    'Woodland Park Zoo',
    prices[1],
    types[1],
    areas[1],
    'img/woodlandParkZoo.jpg',
    'https://goo.gl/maps/FhUmE3G7snM2',
    'Visit naturalistic habitats that take you from Alaska\'s tundra (Northern Trail) to Australia & New Zealand to South America & Africa.',
    'http://zoo.org');
  new Activity(6,
    'Katsu Burger',
    prices[0],
    types[0],
    areas[3],
    'img/katsuBurger.jpg',
    'https://goo.gl/maps/nVSwoE9cQFx',
    'An over-the-top, five-napkin affair, Katsu Burger has a cult following for its quirky Japanese take on an American classic. The burgers are supersized, Instagram-friendly, exotic flavor bombs with names like “Godzilla Attack Spicy!"',
    'https://www.katsuburger.com/');
  new Activity(7,
    'Wa\'z',
    prices[1],
    types[0],
    areas[3],
    'img/wazFood.jpg',
    'https://goo.gl/maps/B5H6WNRUJQ22',
    'This traditional multi-course style features meticulously, elegantly plated dishes served in a specific sequence to honor the seasons and Japanese culture.',
    'https://www.wazseattle.com/');
  new Activity(8,
    'Shiro\'s',
    prices[3],
    types[0],
    areas[0],
    'img/shiroSushi.jpg',
    'https://goo.gl/maps/XqfdhQxqa842',
    'At Shiro’s Sushi we bring you the freshest, best quality seafood that is available from local and international waters. Whether you are seated at our acclaimed sushi bar or at one of our restaurant tables, our chefs look forward to creating your memorable meal.',
    'http://shiros.com/');
  new Activity(9,
    'Seattle Mariner\'s Stadium Tour',
    prices[0],
    types[1],
    areas[3],
    'img/ichiroStadium.jpg',
    'https://goo.gl/maps/QaLksJBCyK42',
    'Sweeping views of Seattle\'s downtown skyline, breathtaking sunsets over Puget Sound, combined with excellent views of game action from all angles give fans at Safeco Field an experience unequalled in Major League Baseball.',
    'https://www.mlb.com/mariners/ballpark/tours');
  new Activity(10,
    'Seattle Mariner\'s Game Tickets',
    prices[1],
    types[1],
    areas[3],
    'img/marinersGame.jpg',
    'https://goo.gl/maps/QaLksJBCyK42',
    'Wanna catch a Mariners Game? Go here!',
    'https://www.mlb.com/mariners/tickets');
  new Activity(11,
    'Snoqualmie Falls',
    prices[0],
    types[1],
    areas[4],
    'img/snoFalls.jpg',
    'https://goo.gl/maps/JFDoxmAnxCS2',
    'Snoqualmie Falls is one of Washington state’s most popular scenic attractions. More than 1.5 million visitors come to the Falls every year. At the falls, you will find a two-acre park, gift shop, observation deck, the Salish Lodge and the famous 270 foot waterfall.',
    'http://www.snoqualmiefalls.com/');
  new Activity(11,
    'Starbucks Reserve Roastery',
    prices[0],
    types[1],
    areas[0],
    'img/starbucksRoast.jpg',
    'https://goo.gl/maps/sMux2ijJZs12',
    'A place where you can experience coffee from the unroasted bean to your cup of coffee. You can watch it being roasted. You\'ll see the burlap sacks it comes in. You can watch it being loaded into the green coffee loading pit. You can buy it scooped at the coffee scoop bar. You can experience your coffee as a pour over, Siphon brewed, Clover-brewed, a shot of espresso, espresso beverages, and more.',
    'https://www.starbucksreserve.com/');
  new Activity(12,
    'Seattle Premium Outlets',
    prices[1],
    types[3],
    areas[4],
    'img/outletMall.jpg',
    'https://goo.gl/maps/X51dd4uozJP2',
    'Popular outlet mall shopping with stores like Coach, Nike, Aldo, and Ralph Lauren.',
    'http://www.premiumoutlets.com/outlet/seattle');    
}

makeLocations();