/* 
2. creare una variabile in cui salviamo il valore della chiave 'prezzo' di uno degli oggetti 
   dell'array ---> questa variabile fungerà da riferimento per il prezzo minimo da estrapolare;
3. creare un ciclo for con cui scorrere i valori della chiave 'prezzo' dei nostri oggetti;
4. inserire un istruzione condizionale nel ciclo con cui confrontare i vari valori iterati con 
   il valore corrispondente alla bici con la variabile corrispondente al prezzo piu basso trovata fino ad ora;
5. stampare tale variabile */


const biciclette = [
    {
        tipo: 'Bici da citta',
        peso: 15
    },
    {
        tipo: 'Bici da corsa',
        peso: 8
    },
    {
        tipo: 'Bici a scatto fisso',
        peso: 10
    },
    {
        tipo: 'Bici pieghevole',
        peso: 11
    },
    {
        tipo: 'Bici elettrica',
        peso: 20
    },
    {
        tipo: 'Bici ibrida',
        peso: 18
    },
    {
        tipo: 'Mountain bike',
        peso: 14
    },
    {
        tipo: 'BMX',
        peso: 10
    },
    {
        tipo: 'Bici da cargo',
        peso: 40
    },
    {
        tipo: 'Gravel',
        peso: 12
    }
]