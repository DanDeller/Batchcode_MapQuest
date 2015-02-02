var url   = '/search/resultsJSON/' + state + '/' + lastName + '/' + firstName,
    stash = [],
    currentState = window.state;

$.getJSON(url, function(json) {
  var whereAt = json;
  for (prop in whereAt) {
    if (whereAt.hasOwnProperty(prop)) {
      if (whereAt[prop].state === currentState) {
        // push zips to empty array
        stash.push(whereAt[prop].zip);
      } // end inner if
    } // end outer if
  } // end for in loop
  
  // how we get pins on the map
  map.geocodeAndAddLocations(stash);
}); // end getJSON
