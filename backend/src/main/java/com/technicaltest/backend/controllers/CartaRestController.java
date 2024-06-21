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
@CrossOrigin(origins = "*")
public class CartaRestController {

    @Autowired
    private CartaService cartaService;

    @GetMapping("/juego")
    public List<Carta> generarJuego() {
        return cartaService.generarCartasJuego();
    }
}

