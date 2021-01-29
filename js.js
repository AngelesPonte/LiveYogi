class Playlist{
    constructor (nombreProfesor,nombrePrograma, nombreClase, duracion){
        this.profesor= nombreProfesor;
        this.programa= nombrePrograma
        this.clase= nombreClase;
        this.duracion= duracion;
    }
}
let misClasesFavoritas = new Playlist ('Angeles','Special Sport edition','kitesurf','20 min' )
console.log(misClasesFavoritas);

let programas = ['Meditation course','the 8 limbs of yoga','special Sports Edition','Yoga Fit','Pregnancy','Journalism Chanllenge']
console.log('Cantidad de programas '+programas.length)

let usuarios = ['Sara','Kelly','Rohan','Nikhil']
console.log ('Cantidad de usuarios :'+ usuarios.length)

let nombre = (prompt('Ingrese su nombre '));
let edadIngresada = Number(prompt("Ingrese su edad "));

function ingresoAlaPag( parametroUno) {  

    parametroUno = edadIngresada  
    if(parametroUno>=13){
        alert ("Welcome to your practice: "+ nombre);}
        else (alert('Sorry, you need adult supervision to enter this site'));
    }

ingresoAlaPag(edadIngresada)

var nombres =['rita','ana','dani','rohan','angie'];
var masculinos =nombres.slice(2,4);
console.log(masculinos)

    class Memberships{
        constructor (duracionPago,duracionMembresia, precio,cantUsuarios){
            this.pago= duracionPago;
            this.membresia= duracionMembresia;
            this.valor= precio;
            this.usuarios=cantUsuarios;
        }
    }
    
    let membresiaMensual = new Memberships ('Pay Monthly','1 Month',15,1)
    let membresiaAnual = new Memberships ('Pay Annually','1 Year',150,1)
    let membresiaFamiliarMensual = new Memberships ('Pay Monthly','1 Month',30,3 )
    let membresiaFamiliarAnual = new Memberships ('Pay Annually','1 Year',300,3 )
    let membresiaGiftCardMensual = new Memberships ('Pay One Time','1 Month',15,1 )
    let membresiaGiftCardAnual = new Memberships ('Pay One Time','1 Year',150,1 )

    console.log(membresiaMensual);
    console.log(membresiaAnual);
    console.log(membresiaFamiliarMensual);
    console.log(membresiaFamiliarAnual);
    console.log(membresiaGiftCardMensual);
    console.log(membresiaGiftCardAnual);
    