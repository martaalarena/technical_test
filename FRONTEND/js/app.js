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
      $location.path("/game");
    };
  },
]);

app.controller("GameCtrl", [
  "$scope",
  "$http",
  "$timeout",
  function ($scope, $http, $timeout) {
    var vm = this;
    vm.cartas = [];
    vm.mostrarCartas = true;
    vm.cartasSeleccionadas = [];
    vm.paresEncontrados = 0;

    var apiUrl = "http://localhost:9000/api/cartas/juego";

    $http
      .get(apiUrl)
      .then(function (response) {
        vm.cartas = response.data.map(function (carta) {
          return {
            id: carta.id,
            imagenUrl: carta.imagenUrl,
            descubierta: true,
          };
        });

        $timeout(function () {
          vm.cartas.forEach(function (carta) {
            carta.descubierta = false;
          });
        }, 2000);
      })
      .catch(function (error) {
        console.error(
          "Error al obtener datos de la API de Spring Boot:",
          error
        );
      });

    vm.seleccionarCarta = function (carta) {
      if (!carta.descubierta && vm.cartasSeleccionadas.length < 2) {
        carta.descubierta = true;
        vm.cartasSeleccionadas.push(carta);

        if (vm.cartasSeleccionadas.length === 2) {
          $timeout(function () {
            if (vm.cartasSeleccionadas[0].id === vm.cartasSeleccionadas[1].id) {
              vm.paresEncontrados++;
            } else {
              vm.cartasSeleccionadas.forEach(function (c) {
                c.descubierta = false;
              });
            }
            vm.cartasSeleccionadas = [];

            if (vm.paresEncontrados === 5) {
              alert("¡Has ganado el juego!");
            }
          }, 1000);
        }
      }
    };
  },
]);
