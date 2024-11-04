/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* i datatype in JavaScript sono delle parti della memoria dedicate alla raccolta di dati, ad esempio:
1. Numeri: il datatype di tipo numerico viene utilizzato per indicare dei valori numerici, la scrittura per un valore numerico è la seguente: var/let *nome della variabile*= *numero che si vuole assegnare*
2. Stringhe: il datatype di tipo stringa viene utilizzato per indicare delle sequenze di caratteri alfanumerici, la scrittura per un valore stringa è il seguente: var/let *nome della variabile*= '/"*stringa che si vuole assegnare*"/'
3. Booleana: il datatype di tipo booleano è una variabile che può contenere solo due valori (true/false), la scrittura per un valore booleano è la seguente: var/let *nome della variabile*= true/false */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let myName = "Daniele" */
let myName = "Rey"
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let numero1 = 12
   let numero2 = 20
   numero2 += numero1 */
   let numero1 = 12
   let numero2 = 20
   numero2 += numero1 
   console.log(numero2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* var x = 12 */
var x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* let myName = "Renna" 
   const myName2 = "Asdrubale"
   let myName2 = "Astolfo"
   in questo caso il programma mi da errore perchè non posso sostituire una variabile ad una costante (non mi faceva neanche salvare)
   */
  

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* x -= 4 */
 x -= 4
 console.log(x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* let name1 = "jhon"
   let name2 = "Jhon"
    "jhon" === "Jhon"(false)
    let name1 = "jhon"
     let name2 = "jhon"
       name1 === name2 (true)
    */
    let name1 = "jhon"
    let name2 = "Jhon"
     name1 === name2
     console.log(name1 === name2)
     let name3 = "jhon"
     let name4 = "jhon"
     "jhon" === "jhon"
     console.log("jhon" === "jhon")
