package com.technicaltest.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technicaltest.backend.model.Carta;
import com.technicaltest.backend.service.CartaService;

@RestController
@RequestMapping("/api/cartas")
@CrossOrigin(origins = "http://localhost:5500")
public class CartaRestController {

    @Autowired
    private CartaService cartaService;

    @GetMapping("/juego")
    public List<Carta> generarJuego() {
        return cartaService.generarCartasJuego();
    }
}


// package com.technicaltest.backend.controllers;

// import java.util.List;

// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.technicaltest.backend.model.Carta;
// import com.technicaltest.backend.service.CartaService;

// @RestController
// @RequestMapping("/api/juego")
// @CrossOrigin(origins = "*")
// public class GameController {
// private final CartaService cartaService;

// public GameController(CartaService cartaService) {
// this.cartaService = cartaService;
// }

// @GetMapping("/cartas")
// public List<Carta> obtenerCartas() {
// return cartaService.obtenerCartas();
// }
// }