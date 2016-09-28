// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'dbaq.ionCoverItem'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// basic routes configuration
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
  }).state('restaurant', {
    url: '/restaurant',
    templateUrl: 'views/restaurant.html',
    controller: 'RestaurantController'
  }).state('place', {
    url: '/place',
    templateUrl: 'views/place.html',
    controller: 'PlaceController'
  }).state('artist', {
    url: '/artist',
    templateUrl: 'views/artist.html',
    controller: 'ArtistController'
  }).state('details', {
    url: '/details',
    templateUrl: 'views/details.html'
  });
})
.controller('PlaceController', ['$scope', function($scope) {
  $scope.places = [{
      cover: 'img/places/sf.jpeg',
      name: 'San Francisco',
      description: 'Popular Destination'
    }, {
      cover: 'img/places/la.jpeg',
      name: 'Los Angeles',
      description: 'Popular Destination'
    }, {
      cover: 'img/places/ny.jpeg',
      name: 'New York',
      description: 'Popular Destination'
    }, {
      cover: 'img/places/santacruz.jpeg',
      name: 'Santa Cruz',
      description: 'Popular Destination'
    }, {
      cover: 'img/places/napa.jpeg',
      name: 'Napa',
      description: 'Popular Destination'
    },  {
      cover: 'img/places/sonoma.jpeg',
      name: 'Sonoma',
      description: 'Popular Destination'
    }, {
      cover: 'img/places/sf.jpeg',
      name: 'San Francisco',
      description: 'Popular Destination'
    }, {
      cover: 'img/places/la.jpeg',
      name: 'Los Angeles',
      description: 'Popular Destination'
    }, {
      cover: 'img/places/ny.jpeg',
      name: 'New York',
      description: 'Popular Destination'
    }, {
      cover: 'img/places/santacruz.jpeg',
      name: 'Santa Cruz',
      description: 'Popular Destination'
    }, {
      cover: 'img/places/napa.jpeg',
      name: 'Napa',
      description: 'Popular Destination'
    },  {
      cover: 'img/places/sonoma.jpeg',
      name: 'Sonoma',
      description: 'Popular Destination'
    }];

}])
.controller('ArtistController', ['$scope', function($scope) {
  $scope.artists = [{
      cover: 'img/artists/2.jpg',
      name: 'Artist 2'
    }, {
      cover: 'img/artists/3.jpg',
      name: 'Artist 3'
    }, {
      cover: 'img/artists/4.jpeg',
      name: 'Artist 4'
    }, {
      cover: 'img/artists/1.jpg',
      name: 'Artist 1'
    }, {
      cover: 'img/artists/2.jpg',
      name: 'Artist 2'
    }, {
      cover: 'img/artists/1.jpg',
      name: 'Artist 1'
    }, {
      cover: 'img/artists/3.jpg',
      name: 'Artist 3'
    }, {
      cover: 'img/artists/4.jpeg',
      name: 'Artist 4'
    } 
  ];

}])
.controller('RestaurantController', ['$scope', function($scope) {
  $scope.restaurants = [{
      cover: 'img/restaurants/1.jpg',
      name: 'Mission Chinese Food',
      description: 'CHINESE - LOWER EAST SIDE'
    }, {
      cover: 'img/restaurants/2.jpg',
      name: 'The Flying Falafel',
      description: 'GREEK - DOWNTOWN'
    }, {
      cover: 'img/restaurants/3.jpg',
      name: 'Kitchen Story',
      description: 'AMERICAN - CASTRO'
    }, {
      cover: 'img/restaurants/4.jpg',
      name: 'Anchor Oyster Bar',
      description: 'SEAFOOD - CASTRO'
    }, {
      cover: 'img/restaurants/1.jpg',
      name: 'Mission Chinese Food',
      description: 'CHINESE - LOWER EAST SIDE'
    }, {
      cover: 'img/restaurants/2.jpg',
      name: 'The Flying Falafel',
      description: 'GREEK - DOWNTOWN'
    }, {
      cover: 'img/restaurants/3.jpg',
      name: 'Kitchen Story',
      description: 'AMERICAN - CASTRO'
    }, {
      cover: 'img/restaurants/4.jpg',
      name: 'Anchor Oyster Bar',
      description: 'SEAFOOD - CASTRO'
    }, {
      cover: 'img/restaurants/1.jpg',
      name: 'Mission Chinese Food',
      description: 'CHINESE - LOWER EAST SIDE'
    }, {
      cover: 'img/restaurants/2.jpg',
      name: 'The Flying Falafel',
      description: 'GREEK - DOWNTOWN'
    }, {
      cover: 'img/restaurants/3.jpg',
      name: 'Kitchen Story',
      description: 'AMERICAN - CASTRO'
    }, {
      cover: 'img/restaurants/4.jpg',
      name: 'Anchor Oyster Bar',
      description: 'SEAFOOD - CASTRO'
    }
  ];

}]).run(['$rootScope', '$state', '$ionicHistory', function($rootScope, $state, $ionicHistory) {
  $rootScope.goTo = function(state) {
    $state.go(state); 
  }
  $rootScope.back = function() {
    $ionicHistory.goBack(); 
  }
}]);