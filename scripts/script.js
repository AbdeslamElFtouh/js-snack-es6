// ARRAY di OGGETTI
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
];

let min_weight = biciclette[0].peso; // variabile riferita al peso minimo

// partiamo da i = 1 perchè min_weight corrisponde già al peso dalla bici numero 0
for (let i = 1; i < biciclette.length; i++){ 
    let current_weight = biciclette[i].peso;
    
    if(current_weight < min_weight){
        min_weight = current_weight;
    }
}

alert('La bicicletta più leggera pesa: ' + min_weight + ' kg'); 


