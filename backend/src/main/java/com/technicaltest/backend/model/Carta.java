
package com.technicaltest.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Carta {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private String imagenUrl;
private Boolean descubierta;
private Boolean emparejada;

public Long getId() {
return id;
}

public void setId(Long id) {
this.id = id;
}

public String getImagenUrl() {
return imagenUrl;
}

public void setImagenUrl(String imagenUrl) {
this.imagenUrl = imagenUrl;
}

public boolean isDescubierta() {
return descubierta;
}

public void setDescubierta(boolean descubierta) {
this.descubierta = descubierta;
}

public boolean isEmparejada() {
return emparejada;
}

public void setEmparejada(boolean emparejada) {
this.emparejada = emparejada;
}

}

// // package com.technicaltest.backend.model;

// // public class Carta {
// // private String id;
// // private String imagenUrl;

// // public Carta(String id, String imagenUrl) {
// // this.id = id;
// // this.imagenUrl = imagenUrl;
// // }

// // public Carta() {

// // }
// // public String getId() {
// // return id;
// // }

// // public String getImagenUrl() {
// // return imagenUrl;
// // }

// // }