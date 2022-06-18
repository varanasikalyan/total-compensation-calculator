export const API = {    
    URI: 'http://localhost:5100/'
}

export const PayRound = (pay) => Math.round((pay + Number.EPSILON) * 100) / 100

export const NumberWithCommas = (num, skipCurrency) => (!skipCurrency ? '₹ ' : '') + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")