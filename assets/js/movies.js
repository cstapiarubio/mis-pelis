var miUrl = 'https://netflixroulette.net/api/api.php?director=';

var directores = ['Quentin%20Tarantino','Stephen%20King','Tim%20Burton','Woody%20Allen','Steven%20Spielberg', 'Chris%20Sanders', 'Peter%20Jackson', 'Jimmy%20Murakami', 'Simon%20West', 'Roger%20Donaldson', 'Joel%20Schumacher', 'Scott%20Walker', 'John%20Woo'];

var callbacksPeli = function(ele){
    $.ajax({
      url: miUrl + ele,
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
      var elRuntime= response.runtime; 
      var laImg = response.poster;


      //Camnbiar HTML como se veria en pantalla
      /*
        La caja debe tener un id que se llama de la variable de arriba
      */

      var pelis = "";
      response.forEach(function(el){
        pelis += `
              <hr>        
              <div class="container listado">  
                <div class="row">  
                  <div class="col-sm-6 col-xs-6 pull-left" id="${el.show_id}">  
                    <p class="text"><strong class="element_titlepeli">  ${el.show_title} </strong>  ${el.release_year}  |  ${el.category}  </p>  
                  </div> 
                  <div class="col-sm-6 col-xs-6 pull-right">  
                    <a id="element_movie__btn__favorites" type="button" class="btn">Add favorites</a>  
                  </div>  
                </div> 
                <div class="row"> 
                  <div class="col">  
                    <div class="col s6 pull-left">  
                      <p class="element_movie__icon"><i class="fa fa-clock-o" aria-hidden="true"></i> ${el.runtime} </p> 

                    </div>  
                    <div class="col s6 center-block">  
                      <p class="element_movie__icon">  
                        <i class="fa fa-film" aria-hidden="true"></i>  
                        ${el.director}  
                      </p> 
                    </div>  
                    <div class="col-sm-4 col-xs-4 pull-right">  
                      <i class="material-icons star">star</i>
                      <i class="material-icons star">star</i>
                      <i class="material-icons star">star</i>
                      <i class="material-icons star">star_half</i>
                      <i class="material-icons star">star_border</i>
                    </div> 
                  </div> 
                </div> 
              </div>  
            
      `; 
      });
      $("#mostrar-pelis").html(pelis);
    });  
  }


callbacksPeli(directores[0])