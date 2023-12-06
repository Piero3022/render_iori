const Iori = document.getElementById("Iori");
const inputNombre = document.getElementById("id_name");
const inputDni = document.getElementById("id_dni");
const inputTelefono = document.getElementById("id_number");
const inputCorreo = document.getElementById("id_email");
const inputEdad = document.getElementById("id_age");
const body = document.querySelector("body");
const anchoMitad = window.innerWidth * 0.5;
const altoMitad = window.innerHeight * 0.5;
let seguriPunteoMouse = true;

body.addEventListener('mousemove', (m) => {
    if (seguriPunteoMouse) {
        if (m.clientX < anchoMitad && m.clientY < altoMitad) {
            // aquí agregar la imagen con la mirada arriba a la izquierda
            Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando izquierda).png";
        }
        else if (m.clientX < anchoMitad && m.clientY > altoMitad) {
            // aquí agregar la imagen con la mirada abajo a la izquierda
            Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección izquierda).png";
        }
        else if (m.clientX > anchoMitad && m.clientY < altoMitad) {
            // aquí agregar la imagen con la mirada arriba a la derecha
            Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando derecha).png";
        }
        else {
            // aquí agregar la imagen con la mirada abajo a la derecha
            Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección derecha).png";
        }
        Iori.style.width = "600px";
        Iori.style.height = "600px";
    }
})
inputNombre.addEventListener("focus", () => {
    seguriPunteoMouse = false;
})
inputNombre.addEventListener("blur", () => {
    seguriPunteoMouse = true;
})
inputNombre.addEventListener('keyup', () => {
    let nombre = inputNombre.value.length;
    if (nombre >= 0 && nombre <= 5) {
        //aqui se pondra la primer imagen en donde la vista esta hacia la izquierda
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección izquierda).png";
    } else if (nombre >= 6 && nombre <= 14) {
        //aqui se pondra la segunda imagen en donde la vista esta hacia el centro
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo centro).png";
    } else if (nombre >= 15 && nombre <= 25) {
        //aqui se pondra la tercera imagen en donde la vista esta hacia la derecha
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección derecha).png";
    } else {
        //aqui se pondra la cuarta imagen en donde la vista esta por defoult
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección derecha).png";
    }
})
inputDni.addEventListener("focus", () => {
    seguriPunteoMouse = false;
})
inputDni.addEventListener("blur", () => {
    seguriPunteoMouse = true;
})
inputDni.addEventListener('keyup', () => {
    let dni = inputDni.value.length;
    if (dni >= 0 && dni <= 5) {
        //aqui se pondra la primer imagen en donde la vista esta hacia la izquierda
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección izquierda).png";
    } else if (dni >= 6 && dni <= 14) {
        //aqui se pondra la segunda imagen en donde la vista esta hacia el centro
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo centro).png";
    } else if (dni >= 15 && dni <= 20) {
        //aqui se pondra la tercera imagen en donde la vista esta hacia la derecha
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección derecha).png";
    } else {
        //aqui se pondra la cuarta imagen en donde la vista esta por defoult
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección derecha).png";
    }
})
inputCorreo.addEventListener("focus", () => {
    seguriPunteoMouse = false;
})
inputCorreo.addEventListener("blur", () => {
    seguriPunteoMouse = true;
})
inputCorreo.addEventListener('keyup', () => {
    let correo = inputCorreo.value.length;
    if (correo >= 0 && correo <= 5) {
        //aqui se pondra la primer imagen en donde la vista esta hacia la izquierda
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección izquierda).png";
    } else if (correo >= 6 && correo <= 14) {
        //aqui se pondra la segunda imagen en donde la vista esta hacia el centro
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo centro).png";
    } else if (correo >= 15 && correo <= 20) {
        //aqui se pondra la tercera imagen en donde la vista esta hacia la derecha
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección derecha).png";
    } else {
        //aqui se pondra la cuarta imagen en donde la vista esta por defoult
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección derecha).png";
    }
})
inputTelefono.addEventListener("focus", () => {
    seguriPunteoMouse = false;
})
inputTelefono.addEventListener("blur", () => {
    seguriPunteoMouse = true;
})
inputTelefono.addEventListener('keyup', () => {
    let telefono = inputTelefono.value.length;
    if (telefono >= 0 && telefono <= 5) {
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección izquierda).png";
    } else if (telefono >= 6 && telefono <= 14) {
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo centro).png";
    } else if (telefono >= 15 && telefono <= 20) {
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección derecha).png";
    } else {
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección derecha).png";
    }
})
inputEdad.addEventListener("focus", () => {
    seguriPunteoMouse = false;
})
inputEdad.addEventListener("blur", () => {
    seguriPunteoMouse = true;
})
inputEdad.addEventListener('keyup', () => {
    let edad = inputEdad.value.length;
    if (edad >= 0 && edad <= 5) {
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección izquierda).png";
    } else if (edad >= 6 && edad <= 14) {
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo centro).png";
    } else if (edad >= 15 && edad <= 20) {
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección derecha).png";
    } else {
        Iori.src = "/static/img/iori-biker-shop-logo-editable (mirando abajo dirección derecha).png";
    }
})


