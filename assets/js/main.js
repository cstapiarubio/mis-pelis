$(document).ready(function() {

	/*var elId = response.show_id;
    var elTitulo = response.show_title;
    var elLanzamiento = response.release_year;
    var elrating = response.release_year;
    var elcategory = response.category;
    var elDirector = response.diector;  
    var elRuntime= response.release_year;
    var laImg = response.poster;
    var elreparto = response.show_cast;
    var laInfo = response.summary;
	
	$(".button-collapse").sideNav();

	$(".whatever").click(function(){
		$(".imagen-pelicula").append('<img>' + laImg + '</img>');
		$('.info-peli').append('<h2>' + elTitulo + '</h2>' + '<p>' + laInfo + '</p>' + '<ul><li>' + elreparto + '</li></ul>');

	})*/

	var callbacksPeli = function(num){
    $.ajax({
      url: 'https://netflixroulette.net/api/api.php?actor=Robert%20De%20Niro',
      type: 'GET',
      dataType: 'json',
    })
    .done(function(response){    
      var elId = response.show_id; 
      var elTitulo = response.show_title; 
      var elLanzamiento = response.release_year; 
      var elrating = response.release_year; 
      var elcategory = response.category;
      var elDirector = response.diector;  
      var elRuntime= response.release_year; 
      var laImg = response.poster;


      //Camnbiar HTML como se veria en pantalla
      /*
        La caja debe tener un id que se llama de la variable de arriba
      */

      $("#mostrar-pelis").html(`
        <div class="caja-saldo">
          <div class="row">
            <div class="col s12 center total-text">
              <h6>SALDO TOTAL</h6>
            </div>
          </div>
          <div class="row">
            <div class="col s12 center saldo-text">
              <h4>`++`</h4>
            </div>
          </div>
        </div> 
      `);
    });  
  }

});

