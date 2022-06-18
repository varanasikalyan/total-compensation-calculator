export const API = {    
    URI: 'http://localhost:5100/'
}

export const GenerateRandom = (min = 0, max = 100) => {
    // find diff
    let difference = max - min;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor( rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
}

export const PayRound = (pay) => Math.round((pay + Number.EPSILON) * 100) / 100
