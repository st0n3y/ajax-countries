var countries = [];

window.onload = function() {
  var url = "https://restcountries.eu/rest/v1"
  var request = new XMLHttpRequest();

// console.log( request );

  //'open' and 'onload' are functions of XML.
  request.open( "GET", url );
  request.onload = function() {
    if( request.status === 200 ) {
      console.log( "Got the data" );
      //This will show us the returned data.
      // console.log( request.responseText );
      var jsonString = request.responseText
      countries = JSON.parse( jsonString );
      // var country = countries[0];
      // console.log( country.name );

      var dropdownMenu = document.getElementById( "dropbtn" );
      var dropdownOption = document.getElementById( "myDropdown" );
      dropdownOption.onchange = changeEventHandler;
      for( var i = 0; i < countries.length; i++ ) {
        var option = document.createElement( "option" );
        option.value = i;
        option.text = countries[i].name;
        dropdownOption.appendChild( option );
      }
    }
  }
  //We are sending a 'GET' request, rather than data.
  request.send( null );

}


var changeEventHandler = function( event ) {
  var index = Number( event.target.value );
  var country = countries[index];
  var countryView = document.getElementById( "country-list" );
  countryView.innerHTML = "";
  generateView( index );
}

var generateView = function( index ) {
  
  var countryView = document.getElementById( "country-list" )

  var nameView = document.createElement( "h3" );
  nameView.text = countries[index].name;
  countryView.appendChild( nameView );

  var capitalView = document.createElement( "h4" );
  capitalView.text = countries[index].capital;
  nameView.appendChild( capitalView );
  
  var popView = document.createElement( "h4" );
  popView.text = countries[index].population;
  capitalView.appendChild( popView );

}

var updateLocalStorage = function() {

}

var clearView = function() {

}