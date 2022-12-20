function orderByDate(games = data){

    var n, i, k, aux;
    n = games.length; 
    const orderedDatesGames = []
    for (k = 1; k < n; k++) {

        const {day , month , year} = games[k].release;
        let fechaNueva = month + " " + day + " " + year;
        let dateGame = new Date(fechaNueva);
        console.log("Fecha nueva =" , fechaNueva);
        console.log("Date game =" , dateGame);
        for (i = 0; i < (n - k); i++) {
            const {day , month , year} = games[i +1].release;
            console.log("Seejecuta hasta aca")
            let fechaVieja = month + " " + day + " " + year;
            let oldDateGame = new Date(fechaVieja);
            console.log("fecha vieja =" , fechaVieja)
            console.log("old date =" , oldDateGame);
            if (dateGame > oldDateGame) {
                console.log("entre al primer if")
                aux = dateGame;
                orderedDatesGames[i] = oldDateGame;
                orderedDatesGames[i + 1] = aux;
            }
        }
    }

    console.log(orderedDatesGames); // Mostramos, por consola, la lista ya ordenada

  }

  let gamesDev = orderByDate();
  console.log(gamesDev);


                i 
                   j
  [1, 6, 5, 8, 32, 8]

  i = 0 -> array[i] = 1
  
  j = i+1 (0 + 1) -> array[j] = 6

function bubbleSort(array){
    let length = array.length
    let aux = undefined

    let fechas = array.map(juego => {
        const {day, month, year} = juego.release

        const date = new Date(year, month-1, day)

        return date
    })

    for(let i = 0; i < length-1; i++){
        for(let j = i+1; j < length; j++){
            let anterior = fechas[i]
            let posterior = fechas[j]
        
            if(anterior > posterior){
                auxOriginal = array[i]
                array[i] = array[j]
                array[j] = auxOriginal

                auxFecha = fechas[i]
                fechas[i] = fechas[j]
                fechas[j] = auxFecha
            }
        }
    }

    return array
}

let juegos = [
    {
        release: {
            day: 17,
            month: 9,
            year: 2013
        }
    }, 

    {
        release: {
            day: 25,
            month: 2,
            year: 2022
        }
    }, 

    {
        release: {
            day: 25,
            month: 9,
            year: 2013
        }
    }, 

    {
        release: {
            day: 13,
            month: 11,
            year: 2007
        }
    }, 
]

console.log(juegos)
bubbleSort(juegos)
console.log(bubbleSort(juegos))