var xhr = new XMLHttpRequest();
var url = './travel_recommendation_api.json';

//
const countries_array = [ ];

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    // alert( xhr.response.countries );

    var countries = xhr.response.countries;
    var countriesDiv = document.getElementById('countries');


    countries.forEach(function(country) {

        var country_id = country.id;
        var country_name = country.name;
        var cities = country.cities;

        
        // cities = [ ];
        cities.forEach(function(city) {
            var city_name = city.name;
            var imageUrl = city.imageUrl;
            var description = city.description;

            //
            
            // cities.appendChild({    name: city_name,
            //                         image: imageUrl,
            //                         description: description
            //                     });
            //
        

            console.log( "country_id: ", country_id );
            console.log( "country_name: ", country_name );
            console.log( "city_name: ", city_name );
            console.log( "imageUrl: ", imageUrl );
            console.log( "description: ", description );

            var cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-4');
            cardDiv.classList.add('mb-5');
            cardDiv.classList.add('mb-md-0');

            
            var countryDiv = document.createElement('div');
            countryDiv.classList.add('country');
            countryDiv.classList.add('card');
            countryDiv.classList.add('card-span');
            countryDiv.classList.add('h-100');
            countryDiv.classList.add('shadow-primary');


            var countryBodyDiv = document.createElement('div');
            countryBodyDiv.classList.add('card-body');
            countryBodyDiv.classList.add('my-3');
            // countryBodyDiv.innerText = country_name + "-" + description;


            var countrydescriptionDiv = document.createElement('div');
            countrydescriptionDiv.classList.add('mb-0');
            countrydescriptionDiv.classList.add('px-3');
            countrydescriptionDiv.classList.add('px-md-2');
            countrydescriptionDiv.classList.add('px-xxl-3');
            countrydescriptionDiv.innerText = country_name + " - " + description;


            var countryimageDiv = document.createElement('div');
            countryimageDiv.classList.add('align-items-xl-center');
            countryimageDiv.classList.add('d-block');
            countryimageDiv.classList.add('d-xl-flex');
            countryimageDiv.classList.add('px-3');
            countryimageDiv.classList.add('mt-3');
            countryimageDiv.classList.add('align-self-end');


            var country_image = document.createElement('img');
            country_image.classList.add('img-fluid');
            country_image.classList.add('me-3');
            country_image.classList.add('me-md-2');
            country_image.classList.add('me-lg-3');
            country_image.src = imageUrl;
            country_image.width = '500';


            countryimageDiv.appendChild(country_image);

            var flexDiv = document.createElement('div');
            flexDiv.classList.add('flex-1');
            flexDiv.classList.add('align-items-center');
            flexDiv.classList.add('pt-2');


            var nameHeader = document.createElement('h6');
            nameHeader.classList.add('mb-0');
            nameHeader.innerText = city_name;


            countriesDiv.appendChild(flexDiv);
            countriesDiv.appendChild(cardDiv);
            // countriesDiv.appendChild(countryDiv);
            countriesDiv.appendChild(countryBodyDiv);
            countriesDiv.appendChild(nameHeader);
            countriesDiv.appendChild(countrydescriptionDiv);
            countriesDiv.appendChild(country_image);
            

        });

        countries_array.appendChild({   id: country_id, 
            name: country_name,
            cities : cities
        })
    });
}

xhr.send();