/*4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adultsAge = ages.filter((age) => {
	if (age > 18) {
		return age
	}
})
console.log(adultsAge)

/*4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/

const evenAge = ages.filter((age) => {
	if(age % 2 === 0) {
		return age
	}
})
console.log(evenAge)

/*4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const loleros = streamers.filter((streamer) => {
	if(streamer.gameMorePlayed === 'League of Legends') {
		return streamer
	}
})

console.log(loleros)

/*4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/

const streamerWithU = streamers.filter((streamer) => {
	if(streamer.name.includes('u')) {
		return streamer
	}
})
console.log(streamerWithU)

/*4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/


// He usado esta solucion aunque ocupe más memoria, por no modificar el array original
const modOldStreamers = streamers
	.filter((streamer) => streamer.gameMorePlayed.includes('Legends')) 
	.map((streamer) => {
		if (streamer.age > 35) {
			return {
				...streamer,
				gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
			}
		}
		return streamer
	});

console.log(modOldStreamers);