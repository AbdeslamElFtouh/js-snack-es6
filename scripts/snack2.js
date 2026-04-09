const squadre = [
    {
        nome: 'Barcellona',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Inter',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Milan',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Bayer Monaco',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Juventus',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Liverpool',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Manchester City',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Real Madrid',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Borussia Dortmund',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Como',
        punti_fatti: 0,
        falli_subiti: 0
    }
];

// Funzione per la generazione di numeri interi randomici compresi fra min e max
function get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creo un array vuoto da riempire con i nuovi oggetti
const new_array = [];

// Ciclo 'for' per iterare l'array 'squadre' 
for (let i = 0; i < squadre.length; i++) {
    // Assegnare valori alle due chiavi che prima erano settate a zero
    squadre[i].punti_fatti = get_random_int(0, 100);
    squadre[i].falli_subiti = get_random_int(0, 10);

    // Creazione nuovi oggetti da inserire nel nuovo array
    let nuovo_oggetto = {
        nome : squadre[i].nome,
        falli_subiti : squadre[i].falli_subiti
    };
    // Inserire gli oggetti nel nuovo array
    array_new.push(nuovo_oggetto);
}
// Stampare per verificare
console.log(squadre)
console.log(new_array)


