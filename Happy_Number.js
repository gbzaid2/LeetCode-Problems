/**
 * @param {number} n
 * @return {boolean}
 */


// Convert number to string
// Rip apart each digit, convert each digit to int
// Square then sum all digits
// Repeat, until you get 1 as an answer


// When do you stop?

var isHappy = function(n) {
    let stringifiedNumber = n + "";
    let results = [];
    while(true){
        let squaredSum = 0;
        for(let i = 0; i < stringifiedNumber.length; i++){
            squaredSum += (Number.parseInt(stringifiedNumber[i]))**2
        }
        if (squaredSum === 1){return true;}
        if (results.includes(squaredSum)){return false;}
        results.push(squaredSum);
        stringifiedNumber = squaredSum + "";
    }
    
    
};