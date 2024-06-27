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
    vm.paresEncontrados = 0;

    var apiUrl = "http://localhost:9000/api/cartas/juego"; 

    $http.get(apiUrl)
      .then(function (response) {
        vm.cartas = response.data.map(function (carta) {
          return {
            id: carta.id,
            imagenUrl: carta.imagenUrl,
            descubierta: true // Mostrar las cartas inicialmente
          };
        });

        // Ocultar las cartas después de 2 segundos
        $timeout(function () {
          vm.cartas.forEach(function (carta) {
            carta.descubierta = false;
          });
        }, 2000);
      })
      .catch(function (error) {
        console.error("Error al obtener datos de la API de Spring Boot:", error);
      });

    vm.seleccionarCarta = function (carta) {
      // Verifica que la carta no esté descubierta y que no se seleccionen más de 2 cartas a la vez
      if (!carta.descubierta && vm.cartasSeleccionadas.length < 2) {
        carta.descubierta = true;
        vm.cartasSeleccionadas.push(carta);

        // Si hay dos cartas seleccionadas, verifica si coinciden
        if (vm.cartasSeleccionadas.length === 2) {
          $timeout(function () {
            if (vm.cartasSeleccionadas[0].id === vm.cartasSeleccionadas[1].id) {
              // Las cartas emparejadas permanecen descubiertas
              vm.paresEncontrados++;
            } else {
              // Las cartas no coinciden, volver a ocultarlas
              vm.cartasSeleccionadas.forEach(function (c) {
                c.descubierta = false;
              });
            }
            vm.cartasSeleccionadas = [];

            // Verificar si se ha completado el juego
            if (vm.paresEncontrados === 5) {
              alert('¡Has ganado el juego!');
            }
          }, 1000);
        }
      }
    };
  }
]);

