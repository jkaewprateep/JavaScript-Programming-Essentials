var xhr = new XMLHttpRequest();
var url = './travel_recommendation_api.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    // alert( xhr.response.countries );

    var countries = xhr.response.countries;
    // var articlesDiv = document.getElementById('articountriescles');

    countries.forEach(function(country) {

        var country_id = country.id;
        var country_name = country.name;
        var cities = country.cities;

        cities.forEach(function(city) {
            var city_name = city.name;
            var imageUrl = city.imageUrl;
            var description = city.description;
        

            console.log( "country_id: ", country_id );
            console.log( "country_name: ", country_name );
            console.log( "city_name: ", city_name );
            console.log( "imageUrl: ", imageUrl );
            console.log( "description: ", description );

            
            var countryDiv = document.createElement('div');
            countryDiv.classList.add('country');
            countryDiv.classList.add('card');
            countryDiv.classList.add('card-span');
            countryDiv.classList.add('h-100');
            countryDiv.classList.add('shadow-primary');

            
            var countryBodyDiv = document.createElement('div');
            countryBodyDiv.classList.add('card-body');
            countryBodyDiv.classList.add(' my-3');


            var countrydescriptionDiv = document.createElement('div');
            countrydescriptionDiv.classList.add('mb-0');
            countrydescriptionDiv.classList.add('px-3');
            countrydescriptionDiv.classList.add('px-md-2');
            countrydescriptionDiv.classList.add('px-xxl-3');


            var countryimageDiv = document.createElement('div');
            countrydescriptionDiv.classList.add('align-items-xl-center');
            countrydescriptionDiv.classList.add('d-block');
            countrydescriptionDiv.classList.add('d-xl-flex');
            countrydescriptionDiv.classList.add('px-3');
            countrydescriptionDiv.classList.add('mt-3');
            countrydescriptionDiv.classList.add('align-self-end');

            var country_image = document.createElement('img');
            country_image.classList.add('img-fluid');
            country_image.classList.add('me-3');
            country_image.classList.add('me-md-2');
            country_image.classList.add('me-lg-3');
            country_image.src = imageUrl;
            country_image.width = '50';

                    //     <div class="flex-1 align-items-center pt-2">
        //     <h6 class="mb-0">Isak Pettersson</h6>
        //   </div>
        });

            // alert(imageUrl);

            // console.log( "country_id: ", country_id );
            // console.log( "country_name: ", country_name );
            // console.log( "city_name: ", city_name );
            // console.log( "imageUrl: ", imageUrl );
            // console.log( "description: ", description );


            // var countryDiv = document.createElement('div');
            // countryDiv.classList.add('country');
            // countryDiv.classList.add('card');
            // countryDiv.classList.add('card-span');
            // countryDiv.classList.add('h-100');
            // countryDiv.classList.add('shadow-primary');


            // var countryBodyDiv = document.createElement('div');
            // countryBodyDiv.classList.add('card-body');
            // countryBodyDiv.classList.add(' my-3');


            // var countrydescriptionDiv = document.createElement('div');
            // countrydescriptionDiv.classList.add('mb-0');
            // countrydescriptionDiv.classList.add('px-3');
            // countrydescriptionDiv.classList.add('px-md-2');
            // countrydescriptionDiv.classList.add('px-xxl-3');

            
            // var countryimageDiv = document.createElement('div');
            // countrydescriptionDiv.classList.add('align-items-xl-center');
            // countrydescriptionDiv.classList.add('d-block');
            // countrydescriptionDiv.classList.add('d-xl-flex');
            // countrydescriptionDiv.classList.add('px-3');
            // countrydescriptionDiv.classList.add('mt-3');
            // countrydescriptionDiv.classList.add('align-self-end');

   
            // var country_image = document.createElement('img');
            // country_image.classList.add('img-fluid');
            // country_image.classList.add('me-3');
            // country_image.classList.add('me-md-2');
            // country_image.classList.add('me-lg-3');
            // country_image.src = imageUrl;
            // country_image.width = '50';


        //     <div class="flex-1 align-items-center pt-2">
        //     <h6 class="mb-0">Isak Pettersson</h6>
        //   </div>


        // });


    });
}

xhr.send();