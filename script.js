var a = 6,
    b = 4,
    suma = a + b;

    console.log("Marytė ir Jonas bendrai turi " + suma + " obuolių.");

    suma += 0;
    console.log(suma, "didėja vienetu");
    suma -= 2;
    console.log(suma, "mažėja dviem");

    if (a > b) {
        console.log("Marytė turi daugiau obuolių");
    } else if (a < b){
        console.log("Jonas turi daugiau obuolių");
    } else if ( a = b){
        console.log("Atiduokim obuolius Editai");
    }

    switch(suma) {
        case 1:
            console.log("turi " + suma + "obuolius");
            break;
        case 2:
            console.log("turi " + suma + "obuolius");
            break;
        default:
            console.log("Obuolių kiekis " + suma);        
    }

    var vaisiai = ["apelsinai", "persikai", "vynuogės", "slyvos", "kriaušės", "obuoliai"];
    console.log(vaisiai[2], vaisiai[4]);
    console.log("--------");
    for(let i = 0; i < vaisiai.length; i++) {
        console.log(vaisiai[i]);
    }

    function prekesKaina (kaina, pavadinimas) {
        console.log(kaina, 'ikainis');
        console.log( 'pavadinimas', pavadinimas);
    }

    prekesKaina(5, 'pyragas');
    prekesKaina(2, 'agurkai');