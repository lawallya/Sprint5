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