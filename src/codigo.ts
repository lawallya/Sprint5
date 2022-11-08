//EJERCICIO 1
const cargarChiste = async () => {
    try {
        const respChiste =
            await fetch('https://icanhazdadjoke.com/', {headers: {
                    Accept: "application/json",} ,});
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