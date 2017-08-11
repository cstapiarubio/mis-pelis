$(document).ready(function() {

	var elId = response.show_id;
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

	})

});

