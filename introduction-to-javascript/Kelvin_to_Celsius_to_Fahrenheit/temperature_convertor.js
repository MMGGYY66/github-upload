/*
convert Kelvin to Celsius, then to Fahrenheit.
For example, 283 K converts to 10 °C which converts to 50 °F.
c = k - 273
T(ºF) = 10ºC × 9/5 + 32 = 50ºF
F = c * 9/5 + 32
T(°C) = (68°F - 32) × 5/9 = 20 °C
C = (F -32) * 5/9

 */
// The forecast today is 293 Kelvin
const kelvin = 0 ;

// c = 0 when kelvin = 273
const kelvin_Standard = 273;

// convert Kelvin to Celsius by subtracting 273 from the kelvin variable.
const celsius = kelvin - kelvin_Standard ;

// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32 ;

// round the number saved to fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert celsius to the Newton scale using:
// Newton = Celsius * (33/100)
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

