package com.technicaltest.backend.service;

import com.technicaltest.backend.model.Carta;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class CartaService {

    public List<Carta> generarCartasJuego() {
        List<Carta> cartas = new ArrayList<>();

        // Crear 8 pares de cartas con URLs de imágenes (puedes ajustar el número de pares según tu necesidad)
        String[] imagenUrls = {
            "http://imgfz.com/i/cvu8aN6.png",
            "http://imgfz.com/i/FJeBfPZ.png",
            "http://imgfz.com/i/TA3mtYw.png",
            "http://imgfz.com/i/8d6qyl5.png",
            "http://imgfz.com/i/6JYZ7A2.png"
        };

        for (String url : imagenUrls) {
            Carta carta1 = new Carta();
            carta1.setImagenUrl(url);
            carta1.setDescubierta(false);
            carta1.setEmparejada(false);

            Carta carta2 = new Carta();
            carta2.setImagenUrl(url);
            carta2.setDescubierta(false);
            carta2.setEmparejada(false);

            cartas.add(carta1);
            cartas.add(carta2);
        }

        // Barajar las cartas
        Collections.shuffle(cartas);

        return cartas;
    }
}



// package com.technicaltest.backend.service;

// import com.technicaltest.backend.model.Carta;
// import org.springframework.stereotype.Service;

// import java.util.ArrayList;
// import java.util.Collections;
// import java.util.List;

// @Service
// public class CartaService {
//     private List<Carta> cartas;

//     public CartaService() {
//         cartas = new ArrayList<>();
//         // Simula la carga de imágenes desde una API
//         for (int i = 1; i <= 5; i++) {
//             cartas.add(new Carta(String.valueOf(i), "url_imagen_" + i));
//             cartas.add(new Carta(String.valueOf(i), "url_imagen_" + i)); // Duplicado para el par
//         }
//         Collections.shuffle(cartas);
//     }

//     public List<Carta> obtenerCartas() {
//         return cartas;
//     }
// }
