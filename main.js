var Construcor = function() {
	this.cities = [
		nashville = {
			name: "Nashville",
			abbr: "TN",
			long: 36.17,
			lat: -86.78
		},
		ny = {
			name: "New York",
			abbr: "NY",
			long: 40.71,
			lat: -74.00
		},
		atlanta = {
			name: "Atlanta",
			abbr: "GA",
			long: 33.75,
			lat: -84.39
		},
		denver = {
			name: "Denver",
			abbr: "CO",
			long: 39.74,
			lat: -104.98
		},
		seattle = {
			name: "Seattle",
			abbr: "WA",
			long: 47.61,
			lat: -122.33
		},
		la = {
			name: "Los Angeles",
			abbr: "CA",
			long: 34.05,
			lat: -188.724
		},
		memphis = {
			name: "Memphis",
			abbr: "TN",
			long: 35.15,
			lat: -90.05
		}
	]
}

var Map = new Construcor();


// Return the name of the northernmost, easternmost, 
// southernmost or westernmost city from the list, as requested by the caller.
Map.utmost = function(utmost) {
	var long = [];
	var lat = [];
	var most = Map.cities.map(function(item, index) {
	long.push([item.long, item.name])
	lat.push([item.lat, item.name])

})
	for(var i = 0; i < lat.length; i++){
		var maxLat;
		var minLat;
		if(lat[i] > lat[i+1]) maxLat = lat[i];
		else minLat = lat[i]
	}
	for(var i = 0; i < long.length; i++){
		var maxLong;
		var minLong;
		if(long[i] > long[i+1]) maxLong = long[i];
		else minLong = long[i]
	}

	if(utmost == "northernmost"){
		console.log(maxLat[1])
	}
	else if (utmost == "southernmost"){
		console.log(minLat[1])
	}
	else if (utmost == "easternmost"){
		console.log(maxLong[1])
	}
	else if (utmost == "westernmost"){
		console.log(minLong[1])
	}

}
Map.utmost("easternmost");

//Pass longitude and latitude as parameters, 
//and return the name of the city that is closest to that location.
Map.nearest = function(lng,ltd) {
	var cities = Map.cities;
	var index = 0;
	var min = Math.sqrt(Math.pow(lng-cities[0].long,2) + Math.pow(ltd-cities[0].lat,2));
	for(var i = 1; i < cities.length; i++){
		if(min > Math.sqrt(Math.pow(lng-cities[i].long,2) + Math.pow(ltd-cities[i].lat,2))){
			index = i;
			min = Math.sqrt(Math.pow(lng-cities[i].long,2) + Math.pow(ltd-cities[i].lat,2));
		}
	}
console.log(cities[index].name)
	
	
}

Map.nearest(35,-70);

Map.abbr = function() {
	var abbreviations = Map.cities;

	var setAbbr = new Set();
	for(var i = 0; i < abbreviations.length; i++){
		setAbbr.add(abbreviations[i].abbr);
	}
	var str = "";
	for(var item of setAbbr){
		str += item+" ";
	}
	console.log(str)
}
Map.abbr()

