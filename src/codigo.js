"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//EJERCICIO 1
const cargarChiste = (api) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respChiste = yield fetch(api.url, api.header);
        console.log(respChiste);
        const datosChiste = yield respChiste.json(); //objeto
        console.log(datosChiste.joke); //aqui el chiste solamente.
        //ahora tengo que poner el chiste en pantalla
        document.getElementById("chiste").innerHTML = datosChiste.joke;
    }
    catch (error) {
        console.log(error);
    }
});
; //genero un "tipo" de objeto
let reportJoke = []; //preparo un array vacío 
function valorar(valoracion) {
    let chisteValorado = document.getElementById("chiste").innerHTML;
    let puntuacion = valoracion; //¿enum?
    let fecha = new Date();
    let fechaString = fecha.toISOString();
    const reportAcudit = {
        joke: chisteValorado,
        score: puntuacion,
        date: fechaString
    };
    reportJoke.push(reportAcudit);
    console.table(reportJoke);
}
// NIVEL 2, EJERCICIO 4: 
//llamar,al abrir la pagina ¿evento?, una API de tiempo y mostrar el resultado
//no hace falta evento simplemente con llamar a la funcion del tiron, nada de onclick ni nada 
const infoTiempo = () => __awaiter(void 0, void 0, void 0, function* () {
    let infoMeteo;
    let infoTemperatura;
    try {
        const resposta = yield fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.56&lon=2.01&appid=cf6b3b08d8458fe12e0dddab0b644c2a&lang=ES");
        const dades = yield resposta.json();
        /*console.table(dades);
        console.log(dades);
        console.log(dades.weather);
        console.log(dades.main);
        console.log(typeof dades.main.feels_like, dades.main.feels_like );*/
        infoMeteo = dades.weather[0].description;
        infoTemperatura = dades.main.feels_like - 273.15;
    }
    catch (error) {
        console.log(error);
    }
    document.getElementById("tiempo").innerHTML = infoMeteo + " " + infoTemperatura.toFixed(0) + "ºC";
});
infoTiempo();
//EJERCICIO 5
/**alterna chistes de dos APIs para que no se aburran.
 * cada vez que se clica el boton "chiste sigiente" se actualiza un contador
 * cuando el contador sea impar busca chistes del ejercicio 1
 * cuanod sea par, busca en la nueva API que es en español para ver que efectivamente se alternan.
 * No hace falta que vuelva a escribir la uno, solo que  ponga en contador y la llamda a la segunca API
 * o que la funcion del ejercicio 1 reciba como parámetro la url de la APi, el desarrollo del if se puede simplificar mucho
 * Entonces tengo el rollo de tipar los parametros, o pongo que puede recibir 2 tipos != o uno con otro parametro opcional?
 * O genero una clase que prepare el parametro api para que se envíe a la fn
 *  */
let contador = 0;
const apiUno = {
    url: "https://icanhazdadjoke.com/",
    header: {
        headers: {
            Accept: "application/json",
        },
    }
};
const apiDos = { url: "https://v2.jokeapi.dev/joke/Any?lang=es&type=single" }; //no he definido el tipo de apiDos
const cargarChistesAlternos = () => {
    //console.log("contador: ", contador );
    ++contador;
    //console.log("contador: ", contador );
    if (contador % 2 != 0) {
        cargarChiste(apiUno);
    } //chiste impar en ingles
    else {
        cargarChiste(apiDos);
    } //chiste par en español
};
