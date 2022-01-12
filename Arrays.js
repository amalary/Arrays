// Creating arrays 

let colors = ['red','green','blue'];

console.log(colors);

let nums= [1,2,3,4,5,6];

console.log(nums[1]);

// Indexing through an array 

let movies = ['Caddyshack', 'Interstellar', 'Scareface']; 

let firstMovie = movies[0]; 

console.log(firstMovie); 

// Adding elements to an array 

movies.push('Shrek','Tarzan');

console.log(movies);

// Adding elements to the front of an array 

movies.unshift('Star Wars');

console.log(movies); 

// Removing elements from the end of an Array 

let movie = movies.pop();

console.log(movie); 

// We can also remove from the front of an array with shift 

movie = movies.shift(); 

console.log(movie);

/* 
The Array.prototype.splice method can add or remove any number of elements to/from
an array with a single line of code! has a syntax of:array.splice(start,deleteCount,newItem1,newItem2)

The splice method always returns an array containing the removed elements.

*/

let movies = [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places' ]
let removedMovies = movies.splice(2, 0, 'Spaceballs', 'Alien');
console.log(movies); 

removedMovies = movies.splice(0, 3);
console.log(removedMovies); 


console.log(movies);
removedMovies = movies.splice(1, 0, 'The Sting', 'Another movie'); 

console.log(removedMovies);
console.log(movies); 

// Iterate Over All of the Elements in an Array

let movies = [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places' ]

// movies.forEach(function(movie){ 
//         console.log(movie);
// });

// movies.forEach(function (movie, idx)
// { console.log(idx + ") " + movie);
// });

for (let movie of movies) {
    if (movie === "The Last Airbender") break; console.log(movie);
}

// The slice method always returns a new array and does not mutate (change) the source array. 

let movies = [ 'Spaceballs', 'The Sting', 'Alien' ]
let lastTwoMovies = movies.slice(1, 3); // ['The Sting, 'Alien']

console.log(lastTwoMovies);

// Unlike splice , the 2nd argument in slice represents the ending index (but does not include that index).


// Cpoying All Of An Array 

let movies = [ 'Spaceballs', 'The Sting', 'Alien' ] 

let moviesCopy = [...movies];

console.log(moviesCopy);

// Copying all of an array and insert 

let movies = [ 'Spaceballs', 'The Sting', 'Alien' ]

let moreMovies = ['Interstellar', ...movies, 'Contact'];

console.log(moreMovies); 

// Create a Single String from an Array

let movies = [ 'Spaceballs', 'The Sting', 'Alien' ]

let movieStr = movies.join();
console.log(movieStr) //'Spaceballs,The Sting,Alien'