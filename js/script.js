
document.getElementById('boton-resumen').addEventListener('click', function(event) {
    event.preventDefault(); 
  
    
    var cantidad = parseInt(document.getElementById('inputCantidad').value);
  
    
    var categoria = document.getElementById('inputCategoria').value;
  
    
    var descuento = 0;
    if (categoria === 'Estudiante') {
      descuento = 0.8; // 80% de descuento
    } else if (categoria === 'Trainee') {
      descuento = 0.5; // 50% de descuento
    } else if (categoria === 'Junior') {
      descuento = 0.15; // 15% de descuento
    }
  
    // Calcular el total a pagar
  var valorTicket = 200;
  var total = 0;

  if (isNaN(cantidad) || cantidad <= 0) {
    
    document.getElementById('totalAPagar').textContent = 'Ingrese una cantidad válida de tickets';
  } else {
    total = cantidad * valorTicket * (1 - descuento);

    
    document.getElementById('totalAPagar').textContent = 'Total a Pagar: $' + total.toFixed(2);
  }
});
  

  document.getElementById('boton-borrar').addEventListener('click', function(event) {
    event.preventDefault(); 
  
    
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputApellido').value = '';
    document.getElementById('inputAddress').value = '';
    document.getElementById('inputCantidad').value = '';
    document.getElementById('inputCategoria').selectedIndex = 0;
  
    
    document.getElementById('totalAPagar').textContent = 'Total a Pagar: $';
  });
  