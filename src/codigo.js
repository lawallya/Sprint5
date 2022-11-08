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
const cargarChiste = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respChiste = yield fetch('https://icanhazdadjoke.com/', { headers: {
                Accept: "application/json",
            }, });
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
//EJERCIO 2
