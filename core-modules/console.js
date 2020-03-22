// ? Examples on how to use Node's Console core module

// * SECTION Basic methods
console.log('Regular log')
console.error('Something went wrong')
console.warn('Be careful')

// * SECTION Table
const database = [
    {
        name: 'José',
        lastname: 'Cuevas',
        age: 24,
        likesCoffee: true
    },
    {
        name: 'Eduardo',
        lastname: 'Bonilla',
        age: 22,
        likesCoffee: true
    },
    {
        name: 'Eugenio',
        lastname: 'Soto',
        age: 23,
        likesCoffee: false
    }
]

console.table(database)
/*
Result:
┌─────────┬───────────┬───────────┬─────┬─────────────┐
│ (index) │   name    │ lastname  │ age │ likesCoffee │
├─────────┼───────────┼───────────┼─────┼─────────────┤
│    0    │  'José'   │ 'Cuevas'  │ 24  │    true     │
│    1    │ 'Eduardo' │ 'Bonilla' │ 22  │    true     │
│    2    │ 'Eugenio' │  'Soto'   │ 23  │    false    │
└─────────┴───────────┴───────────┴─────┴─────────────┘
*/

// * SECTION Group

console.group('Movies')
console.log('Blade Runner 2049')
console.log('The Arrival')
console.log('Trainspotting')
console.log('Whiplash')
console.groupEnd('Movies')
console.group('videogames')
console.log('Bloodborne')
console.log('Okami')
console.log('FEZ')
console.group('The Legend of Zelda')
console.log('Ocarina of Time')
console.log('Majora\'s Mask')
console.log('Wind Waker')
console.groupEnd('The Legend of Zelda')
console.log('Sekiro')
/*
Result:
Movies
  Blade Runner 2049
  The Arrival
  Trainspotting
  Whiplash
videogames
  Bloodborne
  Okami
  FEZ
  The Legend of Zelda
    Ocarina of Time
    Majora's Mask
    Wind Waker
  Sekiro
*/

