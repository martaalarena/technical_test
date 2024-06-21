package com.technicaltest.backend.service;

import com.technicaltest.backend.model.Carta;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class CartaService {

 
    // @Autowired
    // private PixabayService pixabayService;

    public List<Carta> generarCartasJuego() {
        List<Carta> cartas = new ArrayList<>();

        // // Obtener imágenes de Pixabay
        // List<ImagenPixabay> imagenesPixabay = pixabayService.obtenerImagenesAleatorias(5); // 5 pares, 10 cartas en total

        // // Crear cartas a partir de las imágenes
        // for (ImagenPixabay imagen : imagenesPixabay) {
        //     Carta carta = new Carta();
        //     carta.setImagenUrl(imagen.getWebformatURL());
        //     cartas.add(carta);
        // }

        // // Duplicar cartas para crear parejas
        cartas.addAll(cartas);

        // // Barajar las cartas
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
