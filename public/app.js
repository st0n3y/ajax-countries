var countries = [];
var country = JSON.parse( localStorage.getItem( "country" ) ) || [];

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
  generateView( index );
}

var generateView = function( index ) {
  
  var countryView = document.getElementById( "list" )

  countryView.innerHTML = "";

  var nameView = document.createElement( "li" );
  nameView.innerText = countries[index].name;
  countryView.appendChild( nameView );

  var capitalView = document.createElement( "li" );
  capitalView.innerText = countries[index].capital;
  countryView.appendChild( capitalView );
  
  var popView = document.createElement( "li" );
  popView.innerText = countries[index].population;
  countryView.appendChild( popView );

  var countryToStore = [];
  countryToStore.push( countries[index].name );
  countryToStore.push( countries[index].capital );
  countryToStore.push( countries[index].population );

  updateLocalStorage( countryToStore );
}

var updateLocalStorage = function( country ) {
  var stringCountry = JSON.stringify( country );
  localStorage.setItem( "country", stringCountry );
}

var clearView = function() {

}