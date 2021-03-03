/*Main*/
$("#name").val()
/*Memberships*/
let carrito = [];
if (localStorage.getItem("carrito") != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  $("#contador").html=carrito.length;
  //document.getElementById('contador').innerHTML = carrito.length;
}
let valoresDelCarrito= JSON.parse(localStorage.getItem("carrito"));
carrito=valoresDelCarrito;

class Memberships{
  constructor (title,descriptionMemb, duration, precio,cantUsuarios, stock){
      this.name= title;
      this.description= descriptionMemb;
      this.duration=duration;
      this.valor= precio;
      this.usuarios=cantUsuarios;
      this.stock=stock;
  }
}

let membresiaMensual = new Memberships ('Monthly','After a 7-day free trial, a recurring charge of U$S 15 monthly will automatically apply.','1 Month',15,'1 User',10)
let membresiaAnual = new Memberships ('Annually','After a 7-day free trial, a recurring charge of U$S 30 monthly will automatically apply.','1 Year',150,'1 User',10)
let membresiaFamiliarMensual = new Memberships ('Familly Monthly','After a 7-day free trial, a recurring charge of U$S 30 monthly will automatically apply','1 Month',30,'3 Users',10)
let membresiaFamiliarAnual = new Memberships ('Familly Annually','After a 7-day free trial, a recurring charge of U$S300 yearly will automatically apply','1 Year',300,'3 Users',10)
let membresiaGiftCardMensual = new Memberships ('Gift Card ~Month~','A one time charge of U$S 15 will automatically apply.','1 Month',15,'1 User',10)
let membresiaGiftCardAnual = new Memberships ('Gift Card ~Year~','A one time charge of U$S 150 will automatically apply.','1 Year',150,'1 User',10)

let baseDeDatos = [
  membresiaMensual,
  membresiaAnual,
  membresiaFamiliarMensual,
  membresiaFamiliarAnual,
  membresiaGiftCardMensual,
  membresiaGiftCardAnual,
];          
  
let showCard = ``;
for (let i = 0; i < baseDeDatos.length; i++) {
  if (baseDeDatos[i].stock > 0) {
    showCard += `
    <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><p href="#">${baseDeDatos[i].name}</p></h5>
              <p class="card-text"><p href="#">${baseDeDatos[i].description}</p></p>
              <p class="card-text"><p href="#">${baseDeDatos[i].duration}</p></p>
              <p class="card-text"><p href="#">U$S${baseDeDatos[i].valor}</p></p>
              <p class="card-text"><p href="#">${baseDeDatos[i].usuarios}</p></p>
              <a href="#" class="btn create" onclick='agregarAlCarrito(${JSON.stringify(
                baseDeDatos[i]
              )})'>Add to cart </a>
            </div>
          </div>
        </div>
    `;
  } else {
    showCard += `
    <h2>I'm sorry, the platform is full</h2>`;
  }
}
//document.getElementById("memberships").innerHTML = showCard;
//JQUERY!
$("#memberships").html(showCard);

$.get('baseDeDatos.json',function(data, status){
  console.log(data)
  console.log(status)
});

//mostrar los productos que se agregaron al carrito


function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  let aux = 0;
  for (let i = 0; i < carrito.length; i++) {
    aux += carrito[i].precio;
  }

  // document.getElementById("precio-total").innerHTML = "U$S" +aux;
  document.getElementById("contador").innerHTML = carrito.length;
}
document.getElementById("showCart").innerHTML=localStorage.getItem("carrito", JSON.stringify(carrito));

function borrarUnProducto() {
  const nuevoCarrito = [];
  for (let i = 0; i < carrito.length; i++) {
    if (i != 1) {
      nuevoCarrito.push(carrito[i]);
    }
  }
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  carrito = nuevoCarrito;
  document.getElementById("contador").innerHTML = carrito.length;
}
/*My-Practice*/

    function printObj(){

      let spiritualObjective = document.getElementById("writeObj").value;
  
      document.getElementById("mostrar").innerHTML= Date.now() + spiritualObjective;
  
      } //funcion Date.now() no aparce el dia correctamente...
      const preventDefault = document.getElementById("preventDefault");
      preventDefault.addEventListener('click', function(e){
  
          e.preventDefault();
  
      });

    


  

