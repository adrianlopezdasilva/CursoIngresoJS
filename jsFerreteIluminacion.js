/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
  var precio;
  var marca
  var cantidadLamparas
  var precioFinal
  var descuento
  var precioDescuento
  var ingresosBrutos

   precio=35;
   precio=parseInt(precio);
   cantidadlamparas=parseInt(cantidadLamparas);
   precioDescuento=parseInt(precioDescuento);

  cantidad=document.getElementById('Cantidad').value;
  marca=document.getElementById('Marca').value;
  precioDescuento=document.getElementById('precioDescuento').value;

  switch(cantidadLamparas==3)
  {
   case 1:
    switch("marca"){
      case 1:
      marca="ArgentinaLuz";
      descuento=precioDescuento*0.85;
      break;

      case 2:
      marca="FelipeLamparas"
      descuento=precioDescuento*0.90;

      case 3:
      


    }
  }



  precioFinal=precioDescuento-descuento;
}
/* 
   var precio=35;
   var marca; cantidadLamparas, precioFinal, ingresosBrutos, descuento,msg

   a) if(cantidadLamparas>=6){
   descuento=precioDescuento*0,5;
   }

   b) Else if (cantidadLamparas==5 && marca=="argenluz") {
	
	descuento=precioDescuento*0,4;
   }

    else if (cantidad==5){
	
	descuento=precioDescuento*03;
   }

   c) else if(cantidadlamparas==4){ (marca=="argenluz" || "felipeLamparas"))
   descuento=precioDescuento*0,20;
   }
   else{
	descuento=precioDescuento*0,2
   }
   d)
   else if (cantidadLamparas==55 && marca=felipeLamparas){
	
	descuento=precioDescuento+0,1
}

else if (cantidadLamparas==3 && marca=argenluz) {

	descuento=precioDescuento*0,15;
   }
   else if {cantidadlamparas==3){
	
	descuento=precioDescuento*0,05
   }
}
else{
	
	desceunto=0;
} 

precioFinal= precioDescuento - descuento;


if(final>120){
	
precioFinal=precioFinal*0,1;

precioFinal=

msg=El precio es + precioFinal+ {}


}

else {
	msg="El precio es"+ precioFinal;
}

alert(msg);
*/