var app = angular.module('gameApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'HomePage.html',
      controller: 'PortadaCtrl'
    })
    .when('/game', {
      templateUrl: 'game.html',
      controller: 'GameCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('PortadaCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.startGame = function() {
    $location.path('/game'); // Navegar a la página del juego
  };
}]);

app.controller('GameCtrl', ['$scope', function($scope) {
  // Añade la lógica de tu juego aquí
}]);
