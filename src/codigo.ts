//EJERCICIO 1
const cargarChiste = async (api: typeof apiUno) => {
    try {
        const respChiste =
            await fetch(api.url, api.header);
        console.log(respChiste);
        const datosChiste = await respChiste.json();//objeto
        console.log(datosChiste.joke);//aqui el chiste solamente.
        //ahora tengo que poner el chiste en pantalla
        document.getElementById("chiste").innerHTML = datosChiste.joke;
    } catch (error) {
        console.log(error);
    }
}

//EJERCIO 2
//maquetacion inicial

//EJERCICIO 3
interface ReportAcudit { joke: string, score: number, date: string };//genero un "tipo" de objeto
type ReportJoke = ReportAcudit[];//declaro el tipo array de objetos del tipo ReportAcudit
let reportJoke: ReportJoke = [];//preparo un array vacío 


function valorar(valoracion: number): void {
    let chisteValorado: string = document.getElementById("chiste").innerHTML;
    let puntuacion: number = valoracion;//¿enum?
    let fecha = new Date();
    let fechaString = fecha.toISOString();

    const reportAcudit: ReportAcudit = {
      joke: chisteValorado,
      score: puntuacion,
      date : fechaString
    };

    reportJoke.push(reportAcudit);
    console.table(reportJoke);
}

// NIVEL 2, EJERCICIO 4: 
    //llamar,al abrir la pagina ¿evento?, una API de tiempo y mostrar el resultado
    //no hace falta evento simplemente con llamar a la funcion del tiron, nada de onclick ni nada 

    const infoTiempo = async () => {
        let infoMeteo : string;
        let infoTemperatura: number;
        try {
          const resposta = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.56&lon=2.01&appid=cf6b3b08d8458fe12e0dddab0b644c2a&lang=ES");
          const dades = await resposta.json();

          /*console.table(dades);
          console.log(dades);
          console.log(dades.weather);
          console.log(dades.main);
          console.log(typeof dades.main.feels_like, dades.main.feels_like );*/

          infoMeteo = dades.weather[0].description 
          infoTemperatura = dades.main.feels_like -273.15;
        } catch (error) {
          console.log(error);
        }
        document.getElementById("tiempo").innerHTML = infoMeteo + " " +infoTemperatura.toFixed(0) + "ºC";
      }

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
let contador: number = 0;
const apiUno: { url: string, header?: {} } = {
    url: "https://icanhazdadjoke.com/",
    header: {
        headers: {
            Accept: "application/json",
        },
    }
};
const apiDos: typeof apiUno = { url: "https://v2.jokeapi.dev/joke/Any?lang=es&type=single" };//no he definido el tipo de apiDos

const cargarChistesAlternos = () => {
    //console.log("contador: ", contador );
    ++contador;
    //console.log("contador: ", contador );

    if (contador % 2 != 0) { cargarChiste(apiUno); }//chiste impar en ingles
    else { cargarChiste(apiDos); }//chiste par en español
}