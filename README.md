# js-campominato-dom

Creazione Griglia

Griglia del Campo Minato. L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


1. Imposto gli elementi statici in markup con html/css: un bottone, un select menu, un container per la griglia, i quadrati.

2. in Javascript: 
   - inserisco il container in una variabile, sarà l'ambiente in cui stampare i quadrati;
  - prendo il bottone e creo una funzione per inizializzare il gioco;
  - creo una funzione di reset per svuotare il container;
  - Creo una funzione per generare un quadrato;
  - creo un ciclo per stampare 100 volte il quadrato;
  - inserisco il ciclo all'interno dell'evento click del bottone;

 // bonus 

1- creo una variabile per prendere l'id del select menu;

2-  creo il markup degli altri quadrati (livello medio e livello difficile);

3- creo altre due funzioni che generino quadrati diversi;

4- creo altre due funzioni per inserirli dentro al container;

5- tolgo il bottone da dentro la funzione creata per inizializzare il gioco semplice;

6- creo delle condizioni: stabilisco che, cliccando il bottone, si inizializzi una funzione diversa seconda della scelta selezionata.

___
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba, fare visulaizzare tutte le bombe in gliglia e congelare la griglia.

0. creo nuove classi css per le bombe;

1. Creo una funzione per generare  un numero da 1 a 16: inserisco un ciclo che gira finché non sono usciti tutti i numeri, che aggiungo man mano alla lista bombsList;

2. creo una funzione per il click in modo che non possa essere cliccato nuovamente un elemento;

3. aggiungo l'argomento isBomb alla funzione che genera il quadrato: se il quadrato è una bomba, aggiungo la classe corrispondente.

