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
  "$timeout",
  function ($scope, $http, $timeout) {
    var vm = this;
    vm.cartas = [];
    vm.mostrarCartas = true;
    vm.cartasSeleccionadas = [];

    // URL de la API de Spring Boot
    var apiUrl = "http://localhost:8080/api/cartas/juego"; // Asegúrese de incluir "/juego"


    // Realiza una solicitud GET a la API de Spring Boot
    $http
      .get(apiUrl)
      .then(function (response) {
        // Éxito: asigna las cartas al modelo
        vm.cartas = response.data.map(function (carta) {
            return {
                id: carta.id,
                imagenUrl: carta.imagenUrl,
                oculta: false,
            };
        });

        // Mostrar las cartas por 2 segundos
        $timeout(function () {
            vm.cartas.forEach(function (carta) {
                carta.oculta = true;
            });
        }, 2000);
    })
    .catch(function (error) {
        // Error: maneja el error
        console.error(
          "Error al obtener datos de la API de Spring Boot:",
          error
        );
    });

    vm.seleccionarCarta = function (carta) {
      if (carta.oculta && vm.cartasSeleccionadas.length < 2) {
        carta.oculta = false;
        vm.cartasSeleccionadas.push(carta);

        if (vm.cartasSeleccionadas.length === 2) {
          $timeout(function () {
            if (vm.cartasSeleccionadas[0].id === vm.cartasSeleccionadas[1].id) {
              // Las cartas emparejadas permanecen visibles
            } else {
              vm.cartasSeleccionadas.forEach(function (c) {
                c.oculta = true;
              });
            }
            vm.cartasSeleccionadas = [];
          }, 1000);
        }
      }
    };
  },
]);
