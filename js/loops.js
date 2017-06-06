var cities = ['New York', 'Washighton D.C', 'Compton', 'Seattle', 'LA'];
var ul = document.createElement('ul');
for (var x = 0; x < cities.length; x++){
		var li = document.createElement('li');
		li.innerHTML = cities[x];
		ul.appendChild(li);	
}

document.body.appendChild(ul);


/*if(cities[x]!== 'Seattle'){
		console.log(cities[x]);

	}*/