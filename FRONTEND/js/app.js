var app = angular.module("gameApp", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "HomePage.html",
        controller: "PortadaCtrl",
      })
      .when("/game", {
        templateUrl: "game.html",
        controller: "GameCtrl",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);

app.controller("PortadaCtrl", [
  "$scope",
  "$location",
  function ($scope, $location) {
    $scope.startGame = function () {
      $location.path("/game"); // Navegar a la página del juego
    };
  },
]);

app.controller("GameCtrl", [
  "$scope",
  "$http",
  function ($scope, $http) {
    // Tu clave de API de Pixabay
    var apiKey = "44332063-26071e0e0ca045c6b8ae1032c";
    // URL de la API de Pixabay
    var apiUrl =
      "https://pixabay.com/api/?key=" +
      apiKey +
      "&q=puppies&image_type=photo&per_page=10";

    // Realiza una solicitud GET a la API de Pixabay
    $http
      .get(apiUrl)
      .then(function (response) {
        // Éxito: asigna las imágenes al modelo
        $scope.images = response.data.hits;
      })
      .catch(function (error) {
        // Error: maneja el error
        console.error("Error al obtener datos de la API de Pixabay:", error);
      });
  },
]);
