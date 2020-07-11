//
let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

let isEarly_registered = false;

let runnerAge = 18;
if (runnerAge > 18 && isEarly_registered){
    raceNumber += 1000;
    console.log(raceNumber);
}
if (runnerAge > 18 && isEarly_registered){
    console.log(`Runner ${raceNumber} will race at 9:30 am.`);
}else if (runnerAge > 18 && !isEarly_registered){
    console.log(`Runner ${raceNumber} will race at 11:00 am.`);
}

if (runnerAge < 18){
    console.log(`Runner ${raceNumber} will race at 12:30 pm.`);
}else {
    console.log('Please see the registration desk');
}

